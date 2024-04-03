function MarsGrid() {
  let squares = [];
  const xLimit = 9;
  const yLimit = 2;

  for (let y = 0; y <= yLimit; y++) {
    for (let x = 0; x <= xLimit; x++) {
      squares.push(<span aria-label={`square at x${x} y${y}`}></span>);
    }
  }

  return <>{squares}</>;
}

export default MarsGrid;
