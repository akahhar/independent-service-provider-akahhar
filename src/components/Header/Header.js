import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  let navigate = useNavigate();
  const login = () => {
    navigate("login");
  };

  const singOutHandler = () => {
    localStorage.removeItem("token");
    signOut(auth);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 d-flex align-items-center justify-content-center">
              <div className="logo">
                <Link to="/">
                  <span>Wedding Moments</span>
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7 d-flex align-items-center justify-content-end justify-content-center">
              <div className="menu-bar">
                <nav>
                  <Link to="/home">Home</Link>
                  <Link to="/checkout">Checkout</Link>
                  <Link to="/blogs">Blog</Link>
                  <Link to="/about">About</Link>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 d-flex align-items-center justify-content-end justify-content-center">
              {user?.uid ? (
                <button className="btn" onClick={singOutHandler}>
                  Sign Out
                </button>
              ) : (
                <button className="btn" onClick={login}>
                  Login
                </button>
              )}
              {/* <span>{user?.displayName && user.displayName}</span> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
