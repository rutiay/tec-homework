import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Mentoring from "./pages/Mentoring";
import Testimonials from "./pages/Testimonials";
import Events from "./pages/Events";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <h1><span>Tech</span> Career</h1>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
            <li>
              <Link to="Courses">Courses</Link>
            </li>
            <li>
              <Link to="Mentoring">Mentoring</Link>
            </li>
            <li>
              <Link to="Testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="Events">Events</Link>
            </li>
          </ul>
        </nav>
        <article>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/Contact" component={Contact}></Route>
            <Route exact path="/Courses" component={Courses}></Route>
            <Route exact path="/Mentoring" component={Mentoring}></Route>
            <Route exact path="/Testimonials" component={Testimonials}></Route>
            <Route exact path="/Events" component={Events}></Route>
          </Switch>
        </article>
      </BrowserRouter>
    </div>
  );
}

export default App;
