import {useEffect} from 'react';
import moment from "moment"

const Time = () => {
    useEffect(()=> {
        const intervalId = setInterval(() => {
            const now = moment()
            const day = now.format("DD/MM");
            const time = now.format("HH:mm:ss");
            document.title = `${day}, ${time}`;
        }, 1000);

        return () => clearInterval(intervalId);
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Time;