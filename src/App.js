import "./App.css";
import { Header } from "./components/Header";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";

function App() {

  const path = {
    "/signin" : <SignIn />,
    "/signup" : <SignUp />
  }
  return (
    <div>
      <Header />
      {
        path[window.location.pathname]
      }
    </div>
  );
}

export default App;
