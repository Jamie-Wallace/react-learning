import { Square } from './Square';

type GridProps = {
    squares: string[][]
};

export const Grid = ( { squares } : GridProps) => {
        let rows = [];

        for (let rowIndex = 0; rowIndex < squares.length; rowIndex++) {
            let row = [];

            for (let columnIndex = 0; columnIndex < squares[rowIndex].length; columnIndex++) {
                row.push(<Square key={columnIndex} value={squares[rowIndex][columnIndex]} xCoordinate={0} yCoordinate={rowIndex} />);   
            }

            rows.push(<div key={rowIndex} >{row}</div>);
        }

        return <div data-testid='mars-rover-grid'>{rows}</div>;
}