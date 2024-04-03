function MarsGrid() {
  let squares = [];
  for (let y = 0; y <= 2; y++) {
    for (let x = 0; x <= 9; x++) {
      squares.push(<span aria-label={`square at x${x} y${y}`}></span>);
    }
  }

  return <>{squares}</>;
}

export default MarsGrid;
