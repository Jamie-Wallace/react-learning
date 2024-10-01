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
    <div className="App bg-blue-300 h-full p-2 flex flex-col items-center space-y-2">
      <h1 className="text-4xl font-semibold">Mars Rover</h1>
      <div className="mb-2">
        <MarsGrid position={position} />
      </div>
      <div>
        <label htmlFor="command" className="pr-2 font-semibold">
          Command:
        </label>
        <input id="command" disabled value={command} />
      </div>
      <div>
        <div className="flex space-x-2 mb-2">
          <button className="btn flex-1" onClick={turnRight}>
            Right
          </button>
          <button className="btn flex-1" onClick={move}>
            Move
          </button>
          <button className="btn flex-1" onClick={turnLeft}>
            Left
          </button>
        </div>
        <div>
          <button className="btn w-full" onClick={executeCommand}>
            Execute
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
