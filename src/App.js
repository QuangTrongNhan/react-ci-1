import "./App.css";
import { Header } from "./components/Header";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { signUp } from "./ultis/ultis";
import React from "react";
// signUp({username:'thanh',email:'ngothanh@gmail.com',password:'123'})
// //do bên ultis trả về promise nên phải .then
// .then(data => {
//   console.log(data)
// })
// .catch(err => {
//   console.log(err.stack)
// })


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
  }
  
  

  handleChange(ev) {
    this.setState({
      username: ev.target.value,
      email: ev.target.value,
      password: ev.target.value,
    });
  }

  render() {
    const path = {
    "/signin": <SignIn/>,
    "/signup": <SignUp username={this.state.username} email={this.state.email} password={this.state.password} change={this.handleChange}/>,
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
