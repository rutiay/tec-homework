import {useState} from 'react';

const YourName = () => {
    const [color, setColor] = useState(true);

    return (
        <div>
            <button onClick={() => setColor(!color)}>Change Color</button>
            <p style={{color: color ? "green" : "red"}}>Ruti Ayaso</p>
        </div>
    );
};

export default YourName;