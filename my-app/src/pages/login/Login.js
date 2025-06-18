import React, { useState } from "react";
import { useDispatch } from "react-redux"; // ❗️You missed this import
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../store/slices/auth.slice"; // Redux thunk
// import { signInWithEmailAndPassword } from "firebase/auth"; ❌ not needed since you're using redux login thunk

function Login() {
  const navigate = useNavigate(); // ❗️Fix: You forgot `const`
  const dispatch = useDispatch(); // ❗️You need to import useDispatch from react-redux

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ❗️Fix: this should be at the start of the function
    try {
      console.log("formData in handleSubmit", formData);
      await dispatch(login(formData)).unwrap(); // ❗️Add unwrap to catch actual errors
      navigate("/"); // ✅ Redirect to home page
      setFormData({ email: "", password: "" }); // ✅ Reset form
    } catch (error) {
      console.error("Login error:", error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;


















// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../config/firebase"; // Adjust the import path as necessary
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/");
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
