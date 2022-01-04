import "./App.css";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Authenticated from "./pages/Authenticated";
import { FIREBASE_AUTH_LOCAL_STORAGE } from "./logic/keys";

function App() {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    const localStorageAuth = JSON.parse(
      localStorage.getItem(FIREBASE_AUTH_LOCAL_STORAGE)
    );
    localStorageAuth ? setAuth(localStorageAuth) : null;
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        {auth ? (
          <>
            <Redirect to="/" />
            <Link to="/Authenticated">Authenticated</Link>
            <button
              onClick={() => {
                setAuth(null);
                localStorage.removeItem(FIREBASE_AUTH_LOCAL_STORAGE);
              }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
            <Redirect to="/" />
          </>
        )}
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/Login"
            render={() => (
              <Login
                setAuth={setAuth}
                localStorageKey={FIREBASE_AUTH_LOCAL_STORAGE}
              />
            )}
          />
          <Route
            exact
            path="/Register"
            render={() => (
              <Register
                setAuth={setAuth}
                localStorageKey={FIREBASE_AUTH_LOCAL_STORAGE}
              />
            )}
          />
          <Route
            exact
            path="/Authenticated"
            render={() => <Authenticated email={auth} />}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
