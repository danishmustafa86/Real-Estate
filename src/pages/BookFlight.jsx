import { useState } from 'react';
import { TextInput, Button, Container, Title, Stack, Alert } from '@mantine/core';
import axios from 'axios';

function BookFlight() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    departure: '',
    destination: '',
    date: '',
  });
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/book-flight', formData);
      setResponse(response.data.assistant_response);
      setError('');
      setFormData({
        name: '',
        email: '',
        departure: '',
        destination: '',
        date: '',
      });
    } catch (error) {
      setError('Error booking flight. Please try again.');
      setResponse('');
    }
  };

  return (
    <Container size="sm">
      <Title order={2} mb="xl">Book Your Flight</Title>
      {error && <Alert color="red" mb="md">{error}</Alert>}
      {response && <Alert color="green" mb="md">{response}</Alert>}
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