import "./App.css";
import { MarsRoverController } from "./MarsRoverController";

function App() {
  const controller = new MarsRoverController();

  return (
    <div className="App">
      <label htmlFor="command">Command:</label>
      <input id="command" disabled />
      <button onClick={controller.move}>Move</button>
      <button onClick={controller.turnRight}>Right</button>
      <button onClick={controller.turnLeft}>Left</button>
    </div>
  );
}

export default App;
