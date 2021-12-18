import { useState } from "react";

const Login = () => {
  let [{ name, email, password }, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(name, email, password);
        }}
      >
        <input
          type="text"
          onChange={(event) =>
            setForm({ name: (name = event.target.value), email, password })
          }
        />
        <input
          type="email"
          onChange={(event) =>
            setForm({ name, email: (email = event.target.value), password })
          }
        />
        <input
          type="password"
          onChange={(event) =>
            setForm({ name, email, password: (password = event.target.value) })
          }
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
