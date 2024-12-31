import React from "react";
import { useState, useEffect } from "react";



const CountDownTimer = ({targetDate}) => {// targetDate is the date we want to
    // count down to
 const calculateTimeLeft = () => {// this function calculates the time left
    const difference =  +new Date(targetDate) - +new Date();
    // means  targetDate - current date
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
        }

    return timeLeft;
}

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());




// useEffect is a hook that runs after every render of the component and it is used to perform side effects in the component
useEffect(() => {
    const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
    }, 1000);

    


return () => clearInterval(timer);
}, []);
  const timerComponents = [];
    Object.keys (timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    }
    );
    return (
        <>
            <h1>Countdown Timer</h1>
            <h2>Time remaining:</h2>
            <div className="time">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
        </>
    );

}; 

export default CountDownTimer;


