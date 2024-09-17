import { useState } from "react";
import "./App.css";
import { MarsRoverController } from "./MarsRoverController";
import MarsGrid from "./MarsGrid";
import { Position } from "./Position";
import { Coordinate } from "./Coordinate";
import { Compass } from "./Compass";

function App() {
  const [command, setCommand] = useState("");
  const [position, setPosition] = useState(
    new Position(new Coordinate(), new Compass())
  );

  //TODO Start from here next time!
  const controller = new MarsRoverController();

  function move(): void {
    setCommand(command + "M");
  }

  function turnRight(): void {
    setCommand(command + "R");
  }

  function turnLeft(): void {
    setCommand(command + "L");
  }

  function executeCommand(): void {
    setPosition(controller.execute(position, command));
    setCommand("");
  }

  return (
    <div className="App">
      <MarsGrid position={position} />
      <div>
        <label htmlFor="command">Command:</label>
        <input id="command" disabled value={command} />
      </div>
      <div>
        <button onClick={move}>Move</button>
        <button onClick={turnRight}>Right</button>
        <button onClick={turnLeft}>Left</button>
        <button onClick={executeCommand}>Execute</button>
      </div>
    </div>
  );
}

export default App;
