import "../assets/css/SignIn.css";
import React from "react";

 function SignIn(props) {
  const { username, password, change, change2, submit} = props;
 
  return (
    <div className="hero">
      <div className="form-box">
        <div className="con-img-signin">
          <img src="./img/icon.png" alt="icon to do App" />
        </div>

        <div className="social-icon">
          <img src="./img/fb.png" alt="" />
          <img src="./img/gp.png" alt="" />
          <img src="./img/tw.png" alt="" />
        </div>

        <form id="login" action="" className="input-group" onSubmit={submit}>
          <input
            type="text"
            className="input-field"
            placeholder="User name"
            required
            onChange= {change} value={username}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Enter password"
            required
            onChange={change2} value={password}
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
export { SignIn };
