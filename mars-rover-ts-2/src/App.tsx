import { useState } from "react";
import "./App.css";
import { MarsRoverController } from "./MarsRoverController";
import { act } from "@testing-library/react";

function App() {
  const controller = new MarsRoverController();

  const [command, setCommand] = useState("");

  function move(): void {
    setCommand( command + "M");
  }

  function turnRight(): void {
    setCommand( command + "R");
  }

  return (
    <div className="App">
      <label htmlFor="command">Command:</label>
      <input id="command" disabled value={command} />
      <button onClick={move}>Move</button>
      <button onClick={turnRight}>Right</button>
      <button onClick={controller.turnLeft}>Left</button>
    </div>
  );
}

export default App;
