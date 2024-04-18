import React, { ReactElement } from "react";

function MarsGrid() {
  let squares: ReactElement[] = [];
  const rowLimit = 9;
  const columnLimit = 9;

  for (let column = 0; column <= columnLimit; column++) {
    buildRow(column);
  }

  function buildRow(column: number) {
    for (let row = 0; row <= rowLimit; row++) {
      squares.push(<span aria-label={`square at x${row} y${column}`} key={`${row},${column}`}></span>);
    }
  }

  return <>{squares}</>;
}

export default MarsGrid;
