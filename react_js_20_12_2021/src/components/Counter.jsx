import { useEffect, useState } from "react";

const Counter = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    setCounter(initialValue);
  }, [initialValue]);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
