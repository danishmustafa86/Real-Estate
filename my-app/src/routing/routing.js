import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase"; // Make sure firebase is configured
import Navbar from "../components/navbar";
import About from "../pages/about/About";
import Buying from "../pages/buying/Buying";
import ContactUs from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Renting from "../pages/renting/Renting";
import SellingPage from "../pages/selling/Selling";
import Posts from "../pages/posts/Posts";
import Footer from "../components/footer";
import Objects from "../pages/objects/Objects";
import Createpost from "../pages/createpost/Createpost";
import SignUp from "../pages/signup/Signup";
import Login from "../pages/login/Login";

function Routing() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" />} />

        {/* Protected Routes */}
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/buying" element={<Buying />} />
            <Route path="/renting" element={<Renting />} />
            <Route path="/selling" element={<SellingPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/objects" element={<Objects />} />
            <Route path="/createpost" element={<Createpost />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default Routing;
