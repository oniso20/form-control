import React from "react";

const Form = (props) => {
  return (
    <form onChange={props.change}>
      <table>
        <tr>
          <td>
            <label htmlFor="firstName">First name</label>
          </td>
          <td>
            <input name="firstName" id="firstName" type="text" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="lastName">Last name</label>
          </td>
          <td>
            <input name="lastName" id="lastName" type="text" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="phoneNumber">Phone number</label>
          </td>
          <td>
            <input name="phoneNumber" id="phoneNumber" type="number" />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="message">Message</label>
          </td>
          <td>
            <input type="textarea" name="message" id="message"></input>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="role">Role</label>
          </td>
          <td>
            <select name="role" id="role" type="select">
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
              <option value="Staff">Staff</option>
            </select>
          </td>
        </tr>
      </table>
      <button onClick={props.click} id="submitButton">
        Submit
      </button>
    </form>
  );
};

export default Form;
