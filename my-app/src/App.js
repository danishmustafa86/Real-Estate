import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'; // ✅ Add this
import Routing from './routing/routing';
import Navbar from './components/navbar';
import './App.css';
import { fetchCurrentUser } from './store/slices/auth.slice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  useEffect(() => {
    const unsubscribe = dispatch(fetchCurrentUser());
    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [dispatch]);

  return (
    <BrowserRouter> {/* ✅ Wrap everything inside */}
      {isLoading ? (
        <div className="loading-screen">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="app-container">
          <Navbar />
          <Routing />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
