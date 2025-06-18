import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../store/slices/auth.slice";

function Signup() {
  const [formData, setFormData] = useState({ email: "", password: "", userName: "", confirmPassword: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("formData in handleChange", formData);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("formData in handleSubmit", formData);
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      if (formData.password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
      }
      if (formData.userName.length < 3) {
        alert("Username must be at least 3 characters long");
        return;
      }
      if (!formData.email.includes("@")) {
        alert("Please enter a valid email address");
        return;
      } if (formData.userName.length > 20) {
        alert("Username must be less than 20 characters long");
        return;
      }
      await dispatch(signup(formData)).unwrap();
      navigate("/");
    }
    catch (error) {
      console.error("Signup error:", error);
    }

  }

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Signup</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;















// // src/pages/Signup.js
// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../config/firebase";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigate("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
