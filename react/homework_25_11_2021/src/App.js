import { Component } from "react";
import Gallery from "./components/Gallery/Gallery";
import Posts from './components/Posts/Posts'
import Todos from "./components/Todo/Todos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gallery />
        <Todos/>
        <Posts />
      </div>);
  }
}

export default App;
