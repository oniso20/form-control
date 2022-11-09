import React from "react";

const Form = (props) => {
  return (
    <form onChange={props.change}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="firstName">First name</label>
            </td>
            <td>
              <input
                name="firstName"
                id="firstName"
                type="text"
                onChange={props.change}
                value={props.firstName}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="lastName">Last name</label>
            </td>
            <td>
              <input
                name="lastName"
                id="lastName"
                type="text"
                onChange={props.change}
                value={props.lastName}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="phoneNumber">Phone number</label>
            </td>
            <td>
              <input
                name="phoneNumber"
                id="phoneNumber"
                type="tel"
                onChange={props.change}
                value={props.phoneNumber}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="role">Role</label>
            </td>
            <td>
              <select name="role" id="role" type="select">
                <option>Other</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
                <option value="Staff">Staff</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="message">Message</label>
            </td>
            <td>
              <input
                type="textarea"
                name="message"
                id="message"
                onChange={props.change}
                value={props.message}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={props.submit} id="submitButton">
        Submit
      </button>
    </form>
  );
};

export default Form;
