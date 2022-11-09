import "./App.css";
import "./form.css";
import "./popup.css";
import "./view.css";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";
import React, { Component } from "react";

class App extends Component {
  state = {
    submitState: false,
    note: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      message: "",
      role: "",
    },
  };

  inputHandler = (event) => {
    this.setState({
      note: { ...this.state.note, [event.target.name]: event.target.value },
      // [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ submitState: !this.state.submitState });
  };

  refreshHandler = () => {
    this.setState({
      note: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        message: "",
        role: "",
      },
      submitState: false,
    });
  };

  render() {
    return (
      <div className="global">
        {!this.state.submitState && (
          <Form
            change={this.inputHandler}
            submit={this.submitHandler}
            {...this.state.note}
          />
        )}
        {!this.state.submitState && <View {...this.state.note} />}
        {this.state.submitState && (
          <Popup
            // {...this.state.note}
            firstName={this.state.note.firstName}
            lastName={this.state.note.lastName}
            phoneNumber={this.state.note.phoneNumber}
            message={this.state.note.message}
            role={this.state.note.role}
            refresh={this.refreshHandler}
            close={this.submitHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
