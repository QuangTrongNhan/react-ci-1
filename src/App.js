import "./App.css";
import { signUp } from "./ultis/ultis";

//ném ra ngoài hàm app vì app đc gọi 2 lần
signUp({ username: "ngothanh", password: "thanh123" })
.then((userID) => {
  console.log(userID);
})
.catch(err => {
  console.log(err.stack);
})

function App() {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default App;
