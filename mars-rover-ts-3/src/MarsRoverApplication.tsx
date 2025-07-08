import { useState } from "react";
import "./App.css";
import { MarsRoverController } from "./MarsRoverController";

function MarsRoverApplication() {
  const [command, setCommand] = useState("");
  const controller = new MarsRoverController();

  function turnLeft(): void {
    setCommand(command + "L");
  }

  function turnRight(): void {
    setCommand(command + "R");
  }

  function executeCommand(): void {
    controller.execute(command);
    setCommand("");
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
      <div>
        <button className="btn flex-1" onClick={turnRight}>
          Right
        </button>
      </div>
      <div>
        <button className="btn w-full" onClick={executeCommand}>
          Execute
        </button>
      </div>
    </div>
  );
}

export default MarsRoverApplication;
