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
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
    role: "",
    submitState: false,
  };

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({ submitState: true });
  };

  refreshHandler = () => {
    window.location.reload(false);
  };

  render() {
    const submitState = this.state.submitState;
    if (submitState === true) {
      return (
        <Popup
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          message={this.state.message}
          role={this.state.role}
          click={this.refreshHandler}
        />
      );
    }
    return (
      <div className="global">
        <Form change={this.inputHandler} click={this.submitHandler} />
        <View
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          message={this.state.message}
          role={this.state.role}
        />
      </div>
    );
  }
}

export default App;
