
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [startFlag, setStartFlag] = useState(true);
  const [timer, setTimer] = useState();

  const startCounter = () => {
    setStartFlag(false);
    setTimer(
      setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000)
    );
    return () => clearInterval(timer);
  };

  const pauseCounter = () => {
    setStartFlag(true);
    clearInterval(timer);
  };

  const resetCounter = () => {
    setCounter(0);
    setStartFlag(true);
    clearInterval(timer);
  };

  return (
    <div className="App">
      <h1 id="counter">{counter}</h1>
      <div>
        {startFlag ? (
          <button onClick={startCounter} className="button buttonStart">
            Start
          </button>
        ) : (
          <button onClick={pauseCounter} className="button buttonPause">
            Pause
          </button>
        )}
        <button onClick={resetCounter} className="button buttonReset">
          Reset
        </button>
      </div>
    </div>
  );
}