import "../assets/css/SignUp.css";

function SignUp(props) {
  return (
    <div className="container-form">

      <div className="con-row">
        <label htmlFor="">username:</label>
        <input type="text" />
      </div>

      <div className="con-row">
        <label htmlFor="">password:</label>
        <input type="password" />
      </div>

      <div className="con-row">
        <label htmlFor="">Re-password:</label>
        <input type="password" />
      </div>


      <div className="cont-btn">
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export { SignUp };
