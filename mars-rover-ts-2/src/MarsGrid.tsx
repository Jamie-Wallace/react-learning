function MarsGrid() {
  let squares = [];
  for (let i = 0; i <= 9; i++) {
    squares.push(<span aria-label={`square at x${i} y0`}></span>);
  }

  return <>{squares}</>;
}

export default MarsGrid;
