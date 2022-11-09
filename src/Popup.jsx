import React from "react";

const Popup = (props) => {
  return (
    <div className="popup-session">
      <div className="popupContainer">
        <h3>Your Note:</h3>
        <p>
          Name:{" "}
          <span>
            {props.firstName} {props.lastName}
          </span>
        </p>
        <p>
          Phone number: <span>{props.phoneNumber}</span>
        </p>
        <p>
          Role: <span>{props.role}</span>
        </p>
        <p>
          Message: <span>{props.message}</span>
        </p>
        <div className="actionButton">
          <button onClick={props.refresh}>YES, I AM SURE</button>
          <button onClick={props.close}>NOPE, DON'T WANT TO POST IT</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
