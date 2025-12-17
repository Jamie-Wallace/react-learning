import { ReactElement } from "react";

function MarsGrid() {
    const xLimit = 10;
    const yLimit = 10;

    const squares: ReactElement[] = [];

    function buildRow(yCoord: number) {
        for (let xCoord = 0; xCoord < xLimit; xCoord++) {
            squares.push(<span aria-label={`square at x${xCoord} y${yCoord}`} key={`${xCoord}-${yCoord}`} className="border-2 p-1"></span>);
        }
    }

    for (let yCoord = 0; yCoord < yLimit; yCoord++) {
        buildRow(yCoord);
    }

    return (<div className='grid grid-cols-10' aria-label={`Mars rover grid`}>
        {squares}
    </div>);
}

export default MarsGrid;