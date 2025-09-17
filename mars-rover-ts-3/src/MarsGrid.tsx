import { ReactElement } from "react";

function MarsGrid() {
    const squares : ReactElement[] = [];

    for(let xCoord = 0; xCoord < 10; xCoord++){
        squares.push(<span aria-label={`square at x${xCoord} y0`}/>);
    }


    return(<div aria-label={`Mars rover grid`}>
       {squares}
    </div>);
}

export default MarsGrid;