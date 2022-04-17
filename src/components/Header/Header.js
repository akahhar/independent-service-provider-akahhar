import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
      {user?.uid ? (
        <button onClick={() => signOut(auth)}>Sign Out</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <span>{user?.displayName && user.displayName}</span>
    </nav>
  );
};

export default Header;
