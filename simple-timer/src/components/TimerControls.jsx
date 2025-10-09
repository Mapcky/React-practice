import { useEffect, useRef } from "react";

const TimerControls = ({ isRunning, toggleTimer, resetTimer }) => {
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);

  return (
    <div>
      <button
        ref={startButtonRef}
        onClick={toggleTimer}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover: bg-green-600 mr-3"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={resetTimer}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover: bg-green-600 "
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
