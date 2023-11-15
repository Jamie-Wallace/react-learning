import "./App.css";
import { MarsRoverController } from "./MarsRoverController";

function App() {
  const controller = new MarsRoverController();

  return (
    <div className="App">
      <button onClick={controller.move}>Move</button>
    </div>
  );
}

export default App;
