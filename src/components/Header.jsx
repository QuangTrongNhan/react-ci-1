import "../assets/css/Header.css";

function Header(props) {
  return (
    <div className="navbar">
      <div className="btn-home">
        <a href="/home">Home</a>
      </div>

      <div className="title">
        <h1 className="title-app">To Do Apps</h1>
      </div>

      <div className="btn-access">

        <div className="btn-SignIn">
          <a href="/signin">Sign In</a>
        </div>

        <div className="btn-SignUp">
          <a href="/signup">Sign Up</a>

        </div>

      </div>
    </div>
  );
}

export { Header };
