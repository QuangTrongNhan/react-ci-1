import "../assets/css/SignUp.css";

function SignUp(props) {
  return (
    <div className="hero">
      <div className="form-box">
        <div class="con-img">
          <img src="./img/user.png" alt="icon user" />
        </div>

        <form id="login" action="" class="input-group">
          <input
            type="text"
            class="input-field"
            placeholder="User id"
            required
          />
          <input
            type="text"
            class="input-field"
            placeholder="Email id"
            required
          />
          <input
            type="password"
            class="input-field"
            placeholder="password"
            required
          />
          <input type="checkbox" class="check-box" />
          <span>I agree to the term & conditios</span>
          <button type="submit" class="btn-login">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export { SignUp };
