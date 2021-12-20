import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Time from "./components/Time";

function App() {
  const [userInput, setUserInput] = useState(0);

  return (
    <div className="App">
      <input
        type="number"
        onChange={(event) => {
          setUserInput(Number(event.target.value));
        }}
      />
      <Counter initialValue={userInput} />
      <Time />
    </div>
  );
}

export default App;
