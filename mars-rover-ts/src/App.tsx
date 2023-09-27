import React, { MouseEventHandler, useState } from "react";
import "./App.css";
import { Grid } from "./grid/Grid";
import { Square } from "./grid/Square";
import { MarsRover } from "./MarsRover/MarsRover";
import { MarsRoverComponent } from "./MarsRover/MarsRoverComponent";
import { Position } from "./MarsRover/Position";
import { Coordinates } from "./MarsRover/Coordinates";
import { Direction } from "./MarsRover/Direction";

export const App = () => {
  const gridSize = 10;

  function createGridSquares() {
    let gridRows: Array<Array<React.ReactElement>> = [];
    for (let rows = 0; rows < gridSize; rows++) {
      let gridColumns: Array<React.ReactElement> = [];
      for (let columns = 0; columns < gridSize; columns++) {
        gridColumns.push(<Square/>);
      }
      gridRows.push(gridColumns);
    }

    gridRows[0][0] = <MarsRoverComponent direction={Direction.North}/>;

    return gridRows;
  }

  const [location, setLocation] = useState("");
  const [squares, setSquares] = useState(createGridSquares());
  const [lastPosition, setLastPosition] = useState(
    new Position(Direction.North, new Coordinates(0, 0))
  );
  const [rover] = useState(new MarsRover());

  const moveRover: MouseEventHandler = () => {
    refreshGrid(rover.execute("M"));
  };

  const turnRoverRight: MouseEventHandler = () => {
    refreshGrid(rover.execute("R"));
  };

  const turnRoverLeft: MouseEventHandler = () => {
    refreshGrid(rover.execute("L"));
  };

  function refreshGrid(result: Position)  {
    let newSquares = [...squares];

    let lastCoordinate = lastPosition.coordinate;
    newSquares[lastCoordinate.positionY][lastCoordinate.positionX] = <Square />;

    newSquares[result.coordinate.positionY][result.coordinate.positionX] = (
      <MarsRoverComponent direction={result.compass} />
    );

    setSquares(newSquares);
    setLastPosition(result);
    setLocation(
      `${result.coordinate.positionX}:${result.coordinate.positionY}:${
        Direction[result.compass]
      }`
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Grid squares={squares} />
          <div>
            <button onClick={turnRoverLeft}>L</button>
            <button onClick={moveRover}>Move</button>
            <button onClick={turnRoverRight}>R</button>
          </div>
          <p>{location}</p>
        </div>
      </header>
    </div>
  );
};
