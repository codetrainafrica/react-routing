import React from "react";

const ServiceDetails = (props) => {
  return (
    <div>
      <h1>Service Details: {props.match.params.id}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
        aspernatur blanditiis similique deleniti! Eius modi est repellendus
        deserunt illo laudantium expedita maxime earum fugit, laboriosam commodi
        officiis iusto itaque inventore?
      </p>
    </div>
  );
};

export default ServiceDetails;
