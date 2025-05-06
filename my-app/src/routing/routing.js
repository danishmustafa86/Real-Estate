import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Createpost from "../pages/createpost/Createpost"; // Adjust path as needed
import SignUp from "../pages/signup/Signup";
import Login from "../pages/login/Login"; // Adjust path as needed    

function Routing(){
    return (

            <Routes>
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
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>


    );
};

export default Routing;