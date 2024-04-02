import React, { useRef, useState } from 'react';
import 'App.css';

// reference a value that's not needed for rendering, meaning if ref value is changed, React will not re-render
// ref.current can be mutated. However, if it holds an object is used for rendering , you should not mutate that object
// useRef can be used to store something like interval ID and retrieve it later, you can put it in a ref
// unlike regular vars, because regular vars reset on every render, the information is local to each copy of your component

function UseRefComp(props) {
  const [startTime, setStartTime] = useState(null);
  const [nowTime, setNowTime] = useState(null);
  const intervalIdRef = useRef(null);

  const handleStartTime = () => {
    setStartTime(Date.now());
    setNowTime(Date.now());

    clearInterval(intervalIdRef.current);

    intervalIdRef.current = setInterval(() => {
      setNowTime(Date.now());
    }, 10);
  };

  const handleStopTime = () => {
    clearInterval(intervalIdRef.current);
  };

  let secondsPassed = 0;
  if (startTime !== null && nowTime !== null) {
    secondsPassed = (nowTime - startTime) / 1000;
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
        <button onClick={handleStartTime}>Start</button>
        <button onClick={handleStopTime}>Stop</button>
      </div>
    </div>
  );
}

export default UseRefComp;
