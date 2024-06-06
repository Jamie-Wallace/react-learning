import { ReactElement } from "react";
import { Position } from "./Position";

function MarsGrid({ position }: { position: Position }) {
  let squares: ReactElement[] = [];
  const rowLimit = 9;
  const columnLimit = 9;

  const map = new Map<string, string>([
    ["N", "^"],
    ["E", ">"],
    ["S", "V"],
    ["W", "<"],
  ]);

  for (let column = 0; column <= columnLimit; column++) {
    buildRow(column);
  }

  function buildRow(column: number) {
    for (let row = 0; row <= rowLimit; row++) {
      let roverToken = "";

      if (
        column === position.coordinate.xCoordinate ||
        row === position.coordinate.yCoordinate
      ) {
        roverToken = map.get(position.compass.currentDirection)!;
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
