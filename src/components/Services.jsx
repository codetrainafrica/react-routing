import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "kdjo3o4uo3u4ildksj",
    name: "Car rentals",
    description: "something about cars here",
  },
  {
    id: "kdjfhfgfh4566565",
    name: "Movie rentals",
    description: "something about movies here",
  },
];

const Services = () => {
  return (
    <div>
      <h1>Services</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem,
        totam similique sunt quam, dignissimos dolores voluptate nisi quasi nemo
        officia! Perferendis soluta ipsam magnam quis officia fuga impedit odit.
      </p>
      <hr />
      {services.map((service) => (
        <div>
          <h5>Name: {service.name}</h5>
          <Link to={`service/${service.id}`}>See details</Link>
        </div>
      ))}
    </div>
  );
};

export default Services;
