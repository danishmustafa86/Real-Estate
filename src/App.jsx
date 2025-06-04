import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookFlight from './pages/BookFlight';
import MyBookings from './pages/MyBookings';

function App() {
  return (
    <MantineProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookFlight />} />
            <Route path="/bookings" element={<MyBookings />} />
          </Routes>
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;