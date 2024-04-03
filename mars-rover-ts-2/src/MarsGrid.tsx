function MarsGrid() {
  let squares = [];
  for (let i = 0; i <= 9; i++) {
    squares.push(<span aria-label={`square at x0 y${i}`}></span>);
  }

  return <>{squares}</>;
}

export default MarsGrid;
