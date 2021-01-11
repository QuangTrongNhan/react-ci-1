import React from "react";
import "../assets/css/Header.css";

/*
Cách 1: khi chỉ sử dụng function để view ko thay đổi state

function Header (props) {
    render() {
    return (
      <div className="container">
        <h1 className="header-title">Search Emoji App</h1>
      </div>
    );
  }
}
*/ 

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="header-title">Search Emoji App</h1>
      </div>
    );
  }
}

//export để xuất ra tái sử dụng 
export { Header };
