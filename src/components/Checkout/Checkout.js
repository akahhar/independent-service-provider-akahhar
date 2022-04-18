import React from "react";

const Checkout = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for the booking");
  };
  return (
    <div className="container py-5">
      <h2 className="text-center">CHECKOUT</h2>
      <h3>BILLING DETAILS</h3>
      <div className="row">
        <div className="col-xl-6">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name :
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email :
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Address :
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter your address"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Your Phone Number :
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="Enter you phone number"
              />
            </div>

            <input type="submit" className="btn" value="Place Order" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
