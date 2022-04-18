import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const onClickHandler = () => {};
  return (
    <div className="container py-5">
      <h2 className="mb-5 text-center">OUR SERVICES</h2>
      <div className="row">
        {services &&
          services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              onClickHandler={onClickHandler}
            />
          ))}
      </div>
    </div>
  );
};

export default Services;
