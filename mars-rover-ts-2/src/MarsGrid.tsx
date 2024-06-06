import { ReactElement } from "react";
import { Position } from "./Position";

function MarsGrid({ position }: { position: Position }) {
  let squares: ReactElement[] = [];
  const rowLimit = 9;
  const columnLimit = 9;

  for (let column = 0; column <= columnLimit; column++) {
    buildRow(column);
  }

  function buildRow(column: number) {
    for (let row = 0; row <= rowLimit; row++) {
      let roverToken = "^";
      if (position.compass.currentDirection === "E") {
        roverToken = ">";
      }
      if (position.compass.currentDirection === "S") {
        roverToken = "V";
      }

      if (
        column !== position.coordinate.xCoordinate ||
        row !== position.coordinate.yCoordinate
      ) {
        roverToken = "";
      }

      squares.push(
        <span
          aria-label={`square at x${column} y${row}`}
          key={`${column},${row}`}
        >
          {roverToken}
        </span>
      );
    }
  }

  return <>{squares}</>;
}

export default MarsGrid;
