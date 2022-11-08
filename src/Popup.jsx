import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-session">
      <div className="popupContainer">
        <h3>Your Note:</h3>
        <p>
          Name: {props.firstName} {props.lastName}
        </p>
        <p>Phone number: {props.phoneNumber}</p>
        <p>Role: {props.role}</p>
        <p>Message: {props.message}</p>
        <div className="actionButton">
          <button onClick={props.click}>YES, I AM SURE</button>
          <button>NOPE, DON'T WANT TO POST IT</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
