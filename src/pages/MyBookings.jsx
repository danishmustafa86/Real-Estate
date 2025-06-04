import { useState, useEffect } from 'react';
import { Container, Title, TextInput, Button, Stack, Card, Text } from '@mantine/core';
import axios from 'axios';

function MyBookings() {
  const [email, setEmail] = useState('');
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/bookings/${email}`);
      setBookings(response.data);
      setError('');
    } catch (error) {
      setError('Error fetching bookings');
      setBookings([]);
    }
  };

  return (
    <Container size="sm">
      <Title order={2} mb="xl">My Bookings</Title>
      <Stack>
        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email to view bookings"
        />
        <Button onClick={fetchBookings}>View Bookings</Button>

        {error && <Text color="red">{error}</Text>}
        
        {bookings.map((booking, index) => (
          <Card key={index} shadow="sm" padding="lg">
            <Text>Name: {booking.name}</Text>
            <Text>From: {booking.departure}</Text>
            <Text>To: {booking.destination}</Text>
            <Text>Date: {booking.date}</Text>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}

export default MyBookings;