type GridProps = {
  squares: JSX.Element[][];
};

export const Grid = ({ squares }: GridProps) => {
  let rows = [];

  for (let rowIndex = squares.length - 1; rowIndex >= 0; rowIndex--) {
    let row = buildRow(squares, rowIndex);
    rows.push(<div key={rowIndex}>{row}</div>);
  }

  return <div data-testid="mars-rover-grid">{rows}</div>;
};

function buildRow(squares: JSX.Element[][], rowIndex: number) {
  let row = [];

  for (let columnIndex = 0; columnIndex < squares[rowIndex].length; columnIndex++) {
    const currentSquare = squares[rowIndex][columnIndex];
    row.push(<span key={columnIndex}>{currentSquare}</span>);
  }

  return row;
}
