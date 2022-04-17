import React from "react";

const Registration = () => {
  return (
    <div>
      <h1>Please Registration now</h1>
      <button>Sign Up with Google</button>
      <form>
        <input type="text" placeholder="Enter Name" />
        <br></br>
        <input type="email" placeholder="Enter Email" /> <br></br>
        <input type="password" placeholder="Enter Password" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Registration;
