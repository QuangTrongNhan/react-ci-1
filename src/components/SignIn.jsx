import "../assets/css/SignIn.css";

function SignIn(props) {
    const test = () =>{
        window.location.assign("/signup")
    }
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

      <div className="cont-btn">
        <button onClick={test}>Sign In</button>
      </div>

    </div>
  );
}

export { SignIn };
