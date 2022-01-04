import { useState } from "react";
import axios from "axios";
import { FIREBASE_API_KEY } from "../logic/keys";

const Login = ({ setAuth, localStorageKey }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
    axios
      .post(url, {
        email,
        password,
      })
      .then(function (response) {
        setAuth(response.data.email);
        localStorage.setItem(
          localStorageKey,
          JSON.stringify(response.data.email)
        );
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
