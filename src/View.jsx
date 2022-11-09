import React from "react";

const View = (props) => {
  return (
    <div className="outputContainer">
      <div className="output">
        <p>
          First name: <span id="fNameResult">{props.firstName}</span>
        </p>
      </div>
      <div className="output">
        <p>
          Last name: <span id="lNameResult">{props.lastName}</span>
        </p>
      </div>
      <div className="output">
        <p>
          Phone number: <span id="pNumResult">{props.phoneNumber}</span>
        </p>
      </div>
      <div className="output">
        <p>
          Role: <span id="roleResult">{props.role}</span>
        </p>
      </div>
      <div className="output">
        <p>
          Message: <span id="messageResult">{props.message}</span>
        </p>
      </div>
    </div>
  );
};

export default View;
