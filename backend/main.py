from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
import google.generativeai as genai
from typing import Optional
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

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
MONGODB_URL = os.getenv("Mongo_DB_Connection_String")
client = AsyncIOMotorClient(MONGODB_URL)
db = client.travel_assistant
bookings_collection = db.bookings

# Configure Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-pro')

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
        
        # Generate assistant response using Gemini
        assistant_message = f"Booking confirmed for {booking.name}. Flight from {booking.departure} to {booking.destination} on {booking.date}."
        
        response = model.generate_content(
            f"Act as a travel assistant and process this flight booking: {assistant_message}"
        )
        
        return {
            "message": "Booking successful", 
            "assistant_response": response.text
        }
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