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

  for (let row = 0; row <= rowLimit; row++) {
    squares.unshift(<div key={`row:${row}`}>{buildRow(row)}</div>);
  }

  function buildRow(row: number): ReactElement[] {
    let actualSquares: ReactElement[] = [];
    for (let column = 0; column <= columnLimit; column++) {
      let roverToken = "";

      if (
        column === position.coordinate.xCoordinate &&
        row === position.coordinate.yCoordinate
      ) {
        roverToken = map.get(position.compass.currentDirection)!;
      }

      actualSquares.push(
        <span
          className="border-gray-500 border-2 px-2"
          aria-label={`square at x${column} y${row}`}
          key={`${column},${row}`}
        >
          {roverToken}
        </span>
      );
    }
    return actualSquares;
  }

  return <div className="border-black border-2">{squares}</div>;
}

export default MarsGrid;
