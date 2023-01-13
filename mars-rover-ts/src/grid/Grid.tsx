import React from 'react';
import { Row } from './Row';

type GridProps = {
    squares: string[][],
    roverLocationX: number,
    roverLocationY: number
};

export class Grid extends React.Component<GridProps> {
    render() {
        let rows = [];

        // TODO: find a better key than index.
        for (let index = 0; index < 10; index++) {
            let xIndex = -1;

            if (index === this.props.roverLocationY) {
                xIndex = this.props.roverLocationX;
            }
            rows.push(<Row key={index} rowIndex={index} roverPositionIndex={xIndex} />);
        }

        rows.reverse();

        return <div data-testid='mars-rover-grid'>{rows}</div>;
    }
}