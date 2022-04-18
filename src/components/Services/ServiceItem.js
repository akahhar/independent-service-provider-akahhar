import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = (props) => {
  const { name, content, price, image } = props.service;
  return (
    <div className="col-xl-3 col-lg-3 col-md-4">
      <div className="service-wrapper mb-4">
        <div className="icon">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>{name}</h3>
          <p>{content}</p>
          <strong>Price : {price}</strong>
        </div>
        <Link to="/checkout" className="btn mt-2">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
