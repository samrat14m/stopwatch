import { useState } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(0);
  const [id, setId] = useState();
  const [list, setList] = useState([]);
  function handleStart() {
    let newTime = time;
    function cb() {
      newTime++;
      setTime(newTime);
    }
    const id = setInterval(cb, 1000);
    setId(id);
  }
  function handleStop() {
    const newList = [...list];
    newList.push(time);
    setList(newList);
  }
  function handlePause() {
    clearInterval(id);
  }
  function handleReset() {
    setList([]);
    clearInterval(id);
    setTime(0);
  }

  return (
    <>
      <div className="App">
        <div>{time}</div>
        <div>
          <button onClick={handleStart}> Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div>
          {list.map((e) => {
            return <li key={e}>{e}</li>;
          })}
        </div>
      </div>
    </>
  );
}
