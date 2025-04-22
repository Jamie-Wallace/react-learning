import { useState } from "react";
import "./App.css";

function App() {
  const [command, setCommand] = useState("");

  function turnLeft(): void {
    setCommand(command + "L");
  }

  return (
    <div>
      <div>
        <label htmlFor="command" className="pr-2 font-semibold">
          Command:
        </label>
        <input id="command" disabled value={command} />
      </div>
      <div>
        <button className="btn flex-1" onClick={turnLeft}>
          Left
        </button>
      </div>
    </div>
  );
}

export default App;
