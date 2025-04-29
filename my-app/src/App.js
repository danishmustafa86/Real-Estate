// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Routing from './routing/routing';
import { Provider } from 'react-redux';
import store from './store/store'; // Import your Redux store


function App() {
  return (
    // <Provider store={store}>
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routing />
        </div>
      </Router>
    </Provider>
  );
}

export default App;