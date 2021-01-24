import "../assets/css/SignIn.css";
import {Component} from "react";

class SignIn extends Component {
 
  render() {
    return (
      <div className="hero">
        <div className="form-box">
          <div className="con-img">
            <img src="./img/icon.png" alt="icon to do App" />
          </div>
          <div className="social-icon">
            <img src="./img/fb.png" alt="" />
            <img src="./img/gp.png" alt="" />
            <img src="./img/tw.png" alt="" />
          </div>

          <form id="login" action="" className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="User name"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>Remember password</span>
            <button type="submit" className="btn-login">
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export { SignIn };
