import { Square } from './Square';

interface RowProps {
    rowIndex: number,
    roverPositionIndex: number
}

export function Row(props: RowProps) {
    let squares = [];
    
    for (let index = 0; index < 10; index++) {
        let squareValue = '';
        if (index === props.roverPositionIndex) {
            squareValue = '^';
        }
        squares.push(<Square key={index} value={squareValue} xCoordinate={index} yCoordinate={props.rowIndex} />);
    }

    return <div>{squares}</div>;
}