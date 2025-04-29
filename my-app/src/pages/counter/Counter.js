import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../store/slices/counter.slice";
import { fetchposts, fetchproducts } from "../../store/slices/counter.slice";
import { setUserAge, setUserEmail, setUserName, setUserPhone, setUserLogin } from "../../store/slices/user.slice";

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector((store) => store.counterSlice.value);
    const isLogin = useSelector((store) => store.userSlice.isLogin);
    const userName = useSelector((store) => store.userSlice.user.name);
    const userAge = useSelector((store) => store.userSlice.user.age);
    const userEmail = useSelector((store) => store.userSlice.user.email);
    const userPhone = useSelector((store) => store.userSlice.user.phone);
    const posts = useSelector((store) => store.counterSlice.posts);
    const products = useSelector((store) => store.counterSlice.products);


    const onClickIncrementHandler = () => {
        console.log("Increment clicked");
        dispatch(increment());
    };

    const onClickDecrementHandler = () => {
        console.log("Decrement clicked");
        dispatch(decrement());
    };
    const resetCounter = () => {
        console.log("Reset clicked");
        dispatch(reset());
    };


    return (
        <div className="counter" style={{ background: "Wheat", color: "black", textAlign: "center" }}>
            <h1>Counter</h1>
            <button onClick={onClickIncrementHandler}>+</button>
            <p>Counter value: {counter}</p>
            <button onClick={onClickDecrementHandler}>-</button>
            <button onClick={resetCounter}>Reset</button>

            <h2>User Details</h2>
            <p>Name: {userName}</p>
            <p>Age: {userAge}</p>
            <p>Email: {userEmail}</p>
            <p>Login Status: {isLogin ? "Logged In" : "Logged Out"}</p>
            <p>Phone: {userPhone}</p>
            <button onClick={() => dispatch(setUserName("John Doe"))}>Set Name</button>
            <button onClick={() => dispatch(setUserAge(30))}>Set Age</button>
            <button onClick={() => dispatch(setUserEmail("danishjajja86@gmail.com"))}>Set Email</button>
            <button onClick={() => dispatch(setUserPhone("1234567890"))}>Set Phone</button>
            <button onClick={() => dispatch(setUserLogin(true))}>Set Login</button>

            <h2>Posts</h2>
            <button onClick={() => dispatch(fetchposts())}>Fetch Posts</button>
            <ul>
                {posts.slice(1,3).map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <h2>Products</h2>
            <button onClick={() => dispatch(fetchproducts())}>Fetch Products</button>
            <ul>
                {products.slice(1,3).map((product) => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
}