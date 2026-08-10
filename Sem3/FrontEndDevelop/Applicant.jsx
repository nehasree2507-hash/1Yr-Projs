import React from "react";

function Applicant(props) {
  return (
    <div>
      <h3>Name : {props.name}</h3>
      <h3>ID : {props.id}</h3>
      <h3>Status : {props.status}</h3>
    </div>
  );
}

export default Applicant;