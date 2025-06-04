import { useState } from 'react';
import { TextInput, Button, Container, Title, Stack, Select } from '@mantine/core';
import axios from 'axios';

function BookFlight() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    departure: '',
    destination: '',
    date: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/book-flight', formData);
      alert('Flight booked successfully!');
    } catch (error) {
      alert('Error booking flight');
    }
  };

  return (
    <Container size="sm">
      <Title order={2} mb="xl">Book Your Flight</Title>
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextInput
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <TextInput
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <TextInput
            label="Departure City"
            value={formData.departure}
            onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
            required
          />
          <TextInput
            label="Destination City"
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            required
          />
          <TextInput
            label="Date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
          <Button type="submit">Book Flight</Button>
        </Stack>
      </form>
    </Container>
  );
}

export default BookFlight;