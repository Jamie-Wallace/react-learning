import { useState } from "react";
import "./App.css";
import { MarsRoverController } from "./MarsRoverController";

function App() {
  const controller = new MarsRoverController();

  const [command, setCommand] = useState("");

  function move(): void {
    //TODO Warning: An update to App inside a test was not wrapped in act(...).
    setCommand("M");
  }

  return (
    <div className="App">
      <label htmlFor="command">Command:</label>
      <input id="command" disabled value={command} />
      <button onClick={move}>Move</button>
      <button onClick={controller.turnRight}>Right</button>
      <button onClick={controller.turnLeft}>Left</button>
    </div>
  );
}

export default App;
