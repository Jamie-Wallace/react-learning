import { Square } from './Square';

type GridProps = {
    squares: string[][],
    roverLocationX: number,
    roverLocationY: number
};

export const Grid = ( { squares, roverLocationX, roverLocationY } : GridProps) => {
        let rows = [];

        for (let rowIndex = 0; rowIndex < squares.length; rowIndex++) { // rows
            for (let columnIndex = 0; columnIndex < squares[rowIndex].length; columnIndex++) {
                rows.push(<Square key={rowIndex} value={squares[rowIndex][columnIndex]} xCoordinate={0} yCoordinate={rowIndex} />);   
            }
        }

        rows.reverse();

        return <div data-testid='mars-rover-grid'>{rows}</div>;
}