import Counter from "./Counter";
import TwoCounter from "./TwoCounter";
import LongText from "./LongText";
import ShowHide from "./ShowHide";
import CounterWithProps from "./CounterWithProps";

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterWithProps counter={45} />
      <TwoCounter />
      <LongText text="ab" />
      <LongText text="abcdef" />
      <ShowHide text="Hello World" />
    </div>
  );
}

export default App;
