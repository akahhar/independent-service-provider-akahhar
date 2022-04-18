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
        <div className="col-xl-6">
          <p>
            Mobile-first is an ecommerce given nowadays. Many of us check out a
            product on our smartphones before making the purchase later. And if
            it’s something we need urgently, apps and mobile sites help us buy
            in just a few clicks. To enhance your mobile site, consider its UI
            design. Remember that your mobile site is not a ‘direct translation’
            of your desktop site. Customers may, for instance, benefit from
            seeing a smaller selection of menus or category pages. They may need
            larger call to action buttons and opt-in information emails rather
            than pages of text. Think of how you can condense your site
            architecture to suit the mobile shopper.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
