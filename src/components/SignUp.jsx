import "../assets/css/SignUp.css";

function SignUp(props) {
  const {username , email , password , change, change2 , change3 , submit} = props;
  return (

    <div className="hero" >

      <div className="form-box">
        <div className="con-img">
          <img src="./img/user.png" alt="icon user" />
        </div>

        <form id="signup" action="" className="input-group" onSubmit={submit}>
          <input  type="text" className="input-field" placeholder="User id" required onChange={change} value={username} />
          <input  type="text" className="input-field" placeholder="Email id" required onChange={change2} value={email}/>
          <input type="password"className="input-field"placeholder="password"required onChange={change3} value={password}/>
          <input type="checkbox" className="check-box" /> <span>I agree to the term & conditios</span>
          <button type="submit" className="btn-login"> Register</button>
        </form>

      </div>
    </div>
  );
}

export { SignUp };
