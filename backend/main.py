from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from openai import OpenAI
from typing import Optional
import os

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGODB_URL = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGODB_URL)
db = client.travel_assistant
bookings_collection = db.bookings

# OpenAI client
openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class BookingRequest(BaseModel):
    name: str
    email: str
    departure: str
    destination: str
    date: str

class AssistantResponse(BaseModel):
    response: str

@app.post("/book-flight")
async def book_flight(booking: BookingRequest):
    try:
        # Store booking in MongoDB
        booking_dict = booking.dict()
        await bookings_collection.insert_one(booking_dict)
        
        # Generate assistant response using OpenAI
        assistant_message = f"Booking confirmed for {booking.name}. Flight from {booking.departure} to {booking.destination} on {booking.date}."
        
        completion = openai_client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful travel assistant."},
                {"role": "user", "content": f"Process this flight booking: {assistant_message}"}
            ]
        )
        
        return {"message": "Booking successful", "assistant_response": completion.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/bookings/{email}")
async def get_bookings(email: str):
    try:
        bookings = await bookings_collection.find({"email": email}).to_list(length=None)
        return bookings
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)