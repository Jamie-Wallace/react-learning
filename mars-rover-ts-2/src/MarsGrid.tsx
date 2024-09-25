import { ReactElement } from "react";
import { Position } from "./Position";

function MarsGrid({ position }: { position: Position }) {
  let rows: ReactElement[] = [];
  const rowLimit = 9;
  const columnLimit = 9;

  const map = new Map<string, string>([
    ["N", "^"],
    ["E", ">"],
    ["S", "V"],
    ["W", "<"],
  ]);

  for (let row = 0; row <= rowLimit; row++) {
    rows = buildRow(row).concat(rows);
  }

  function buildRow(row: number): ReactElement[] {
    let squares: ReactElement[] = [];
    for (let column = 0; column <= columnLimit; column++) {
      let roverToken = "";

      if (
        column === position.coordinate.xCoordinate &&
        row === position.coordinate.yCoordinate
      ) {
        roverToken = map.get(position.compass.currentDirection)!;
      }

      squares.push(
        <span
          className="border-gray-500 border-2 min-w-7 min-h-7 max-w-7 max-h-7"
          aria-label={`square at x${column} y${row}`}
          key={`${column},${row}`}
        >
          {roverToken}
        </span>
      );
    }
    return squares;
  }

  return (
    <div className="w-fit grid grid-cols-10 gap-1">
      {rows}
    </div>
  );
}

export default MarsGrid;
