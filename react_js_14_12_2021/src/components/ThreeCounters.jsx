import {useState} from 'react';

const ThreeCounters = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    return (
        <div>
            <p>Counter1: {counter1}</p>
            <button onClick={() => setCounter1(counter1 + 1)}>Increment1</button>
            <p>Counter2: {counter2}</p>
            <button onClick={() => setCounter2(counter2 + 1)}>Increment2</button>
            <p>Counter3: {counter3}</p>
            <button onClick={() => setCounter3(counter3 + 1)}>Increment3</button>
        </div>
    );
};

export default ThreeCounters;