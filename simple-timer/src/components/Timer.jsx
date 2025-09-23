import { useState, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

const Timer = () => {
  const timerRef = useRef(null);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    if (isRunning) {
      //Clear interval to stop the timer
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      //Start timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  //Reset
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
  };
  return (
    <div>
      <TimerDisplay time={time} />
      <TimerControls
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
        isRunning={isRunning}
      />
    </div>
  );
};

export default Timer;
