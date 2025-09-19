import { useState } from "react";
import LifecycleLoggerClass from "./components/LifeCycleLoggerClass";
import LifecycleLogger from "./components/LifeCycleLogger";

function App() {
  const [showLogger, setShowLogger] = useState(false);

  return (
    <div className="container">
      <h2>React Lifecycle Playground</h2>

      {/* Toggle LifecycleLogger */}
      <button
        className="primary-btn"
        onClick={() => setShowLogger(!showLogger)}
      >
        {showLogger ? "Unmount Logger" : "Mount Logger"}
      </button>

      {showLogger && <LifecycleLogger message="Hello" />}
    </div>
  );
}
export default App;
