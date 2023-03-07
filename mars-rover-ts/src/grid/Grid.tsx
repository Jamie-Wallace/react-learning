import { Square } from './Square';

type GridProps = {
    squares: string[][],
    roverLocationX: number,
    roverLocationY: number
};

export const Grid = ( { squares, roverLocationX, roverLocationY } : GridProps) => {
        let rows = [];

        // TODO: find a better key than index.
        for (let index = 0; index < squares.length; index++) {
            let xIndex = -1;

            if (index === roverLocationY) {
                xIndex = roverLocationX;
            }
            
            rows.push(<div><Square key={index} value={"This is a square"} xCoordinate={0} yCoordinate={index} /></div>);


            //rows.push(<Row key={index} rowIndex={index} roverPositionIndex={xIndex} />);
        }

        rows.reverse();

        return <div data-testid='mars-rover-grid'>{rows}</div>;
}