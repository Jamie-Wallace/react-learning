function MarsGrid() {
  let squares = [];
  for (let i = 0; i <= 9; i++) {
    squares.push(<span aria-label={`square at x0 y${i}`}></span>);
  }

  squares.push(<span aria-label={`square at x1 y0`}></span>);

  return <>{squares}</>;
}

export default MarsGrid;
