import "./App.css";
import { Component } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Emoji } from "./components/Emoji";
import { EmojiList } from "./components/EmojiList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kw: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({ kw: ev.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar kw={this.state.kw} change={this.handleChange} />
        <EmojiList />
      </div>
    );
  }
}

export default App;
