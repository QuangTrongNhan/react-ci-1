import "./App.css";
import { Header } from "./components/Header";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import {showIn4} from './ultis/ultis'

function App() {
showIn4();
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
