import {useState} from 'react';

const Name = ({name}) => {

    const [color, setColor] = useState(true);

    return (
        <div>
            <button onClick={() => setColor(!color)}>Change Color</button>
            <p style={{color: color ? 'green' : 'red'}}>{name}</p>
        </div>
    );
};

export default Name;