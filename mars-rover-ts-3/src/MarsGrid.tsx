import {ReactElement} from "react";

function MarsGrid() {
    const squares: ReactElement[] = [];

    for (let yCoord = 0; yCoord < 10; yCoord++) {
        for (let xCoord = 0; xCoord < 10; xCoord++) {
            squares.push(<span aria-label={`square at x${xCoord} y${yCoord}`} key={`${xCoord}-${yCoord}`}/>);
        }
    }


    return (<div aria-label={`Mars rover grid`}>
        {squares}
    </div>);
}

export default MarsGrid;