import React from "react";

const Details = (props) => {
  console.log(props, "details page");
  console.log(props.detailsList);
  return (
    <ul style={{ listStyleType: "none" }}>
      {props.detailsList.map((el) => (
        <>
          <li>{el.name}</li>
          <li>{el.address}</li>
          <li>{el.hours}</li>
          <li>{el.description}</li>
        </>
      ))}
    </ul>
  );
};

export default Details;
