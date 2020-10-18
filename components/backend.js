import React, {useState, useEffect} from 'react'

export default function Backend(){
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('api/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        });
    },[]);

    return (
        <div>
            <p>The current time is {currentTime}</p>
        </div>
    );
}