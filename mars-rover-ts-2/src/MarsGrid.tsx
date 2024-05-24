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
      if (column == 0 && row == 0) {
        squares.push(
            <span
                aria-label={`square at x${row} y${column}`}
                key={`${row},${column}`}>^</span>
        );
      } else {
        squares.push(
            <span
                aria-label={`square at x${row} y${column}`}
                key={`${row},${column}`}
            />
        );
      }
    }
  }

  return <>{squares}</>;
}

export default MarsGrid;
