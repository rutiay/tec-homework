import "./App.css";
import { useEffect, useState } from "react";
import Reddit2 from "./components/Reddit2";

function App() {
  const [userInput, setUserInput] = useState("reactjs");

  useEffect(() => {
    setUserInput(userInput);
  }, [userInput]);

  return (
    <div className="App">
      <input
        type="text"
        onChange={(evt) => {
          setUserInput(evt.target.value);
        }}
      />
      <Reddit2 format={userInput} />
    </div>
  );
}

export default App;
