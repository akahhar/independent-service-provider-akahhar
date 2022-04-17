import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, loading] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <div>
      <h1>Please login now</h1>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      <form>
        <input type="email" placeholder="Enter Email" /> <br></br>
        <input type="password" placeholder="Enter Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
