/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [data] = useAuthState(auth);
  console.log(data);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passHandler = (event) => {
    setPassword(event.target.value);
  };
  const from = location?.state?.from?.pathname || "/";

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((data) => {
      navigate(from, { replace: true });
    });
  };
  const notify = () => toast.error(error?.message);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (error) {
      notify();
    }
    if (data?.accessToken) {
      navigate(from);
    }
  }, [data, error, from, navigate, notify]);

  return (
    <div className="form-container">
      <h1>Please Login now</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email :
          </label>
          <input
            type="email"
            onBlur={emailHandler}
            className="form-control"
            id="name"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Password :
          </label>
          <input
            type="password"
            onBlur={passHandler}
            className="form-control"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <h6 style={{ color: "red" }}>{error?.message}</h6>

        <input
          type="submit"
          disabled={loading}
          className="btn"
          value={loading ? "Loading..." : "Login"}
        />
      </form>
      <p>
        <Link to={"/sendPasswordReset"}>Forgotten password?</Link>
      </p>
      <p>
        If new user ? <Link to="/registration">Registration</Link>
      </p>

      <button className="btn" onClick={handleGoogleSignIn}>
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
