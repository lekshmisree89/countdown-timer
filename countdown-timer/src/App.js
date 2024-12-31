import React from "react";
import CountDownTimer from "./components/countDownTimer";
import "./App.css";

const App = () => {

    return (
        <div>
            <CountDownTimer targetDate="2024-12-31T23:59:59" />
        </div>
    );
}

export default App;
