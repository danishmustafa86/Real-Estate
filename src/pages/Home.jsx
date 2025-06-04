import { Container, Title, Text, Button, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container size="md" style={{ marginTop: '2rem' }}>
      <Stack align="center" spacing="xl">
        <Title order={1}>Welcome to Travel Assistant</Title>
        <Text size="lg" align="center">
          Your AI-powered travel companion for hassle-free flight bookings
        </Text>
        <Button component={Link} to="/book" size="lg">
          Book Your Flight Now
        </Button>
      </Stack>
    </Container>
  );
}

export default Home;