import { Link } from 'react-router-dom';
import { Header, Container, Group, Button } from '@mantine/core';

function Navbar() {
  return (
    <Header height={60}>
      <Container size="xl">
        <Group justify="space-between" h="100%">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Travel Assistant
          </Link>
          <Group>
            <Button component={Link} to="/book" variant="light">
              Book Flight
            </Button>
            <Button component={Link} to="/bookings" variant="light">
              My Bookings
            </Button>
          </Group>
        </Group>
      </Container>
    </Header>
  );
}

export default Navbar;