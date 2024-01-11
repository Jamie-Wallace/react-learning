import { useState } from "react";
import "./App.css";
import { MarsRoverController } from "./MarsRoverController";

function App() {
  const controller = new MarsRoverController();

  const [command, setCommand] = useState("");

  function move(): void {
    setCommand(command + "M");
  }

  function turnRight(): void {
    setCommand(command + "R");
  }

  function turnLeft(): void {
    setCommand(command + "L");
  }

  return (
    <div className="App">
      <label htmlFor="command">Command:</label>
      <input id="command" disabled value={command} />
      <button onClick={move}>Move</button>
      <button onClick={turnRight}>Right</button>
      <button onClick={turnLeft}>Left</button>
      <button onClick={controller.execute}>Execute</button>
    </div>
  );
}

export default App;
