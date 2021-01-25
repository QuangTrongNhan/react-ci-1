import "./App.css";
import { Header } from "./components/Header";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { signUp } from "./ultis/ultis";
import React from "react";
// signUp({ username: "thanh", email: "ngothanh@gmail.com", password: "123" })
//   //do bên ultis trả về promise nên phải .then
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.stack);
//   });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({
      username: ev.target.value,
    });
  }

  handleChange2(ev) {
    this.setState({
      email: ev.target.value,
    });
  }

  handleChange3(ev) {
    this.setState({
      password: ev.target.value,
    });
  }

  handleSubmit(ev) {
    signUp({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    })
      //do bên ultis trả về promise nên phải .then
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        alert(err.stack);
      });

    // alert('A value was submitted: '+"Username: " + this.state.username + " Email: "+ this.state.email + " Password: " + this.state.password);
    ev.preventDefault();
  }

  render() {
    const path = {
      "/signin": <SignIn />,
      "/signup": (
        <SignUp
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
          change={this.handleChange}
          change2={this.handleChange2}
          change3={this.handleChange3}
          submit={this.handleSubmit}
        />
      ),
    };
    return (
      <div>
        <Header />
        {path[window.location.pathname]}
      </div>
    );
  }
}

export default App;
