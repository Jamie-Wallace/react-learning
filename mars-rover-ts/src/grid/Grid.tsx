import React from 'react';
import { Row } from './Row';

export class Grid extends React.Component {
    render() {
        let rows = [];

        for (let index = 0; index < 10; index++) {
            rows.push(<Row key={index} />);
        }

        return <div data-testid='mars-rover-grid'>{rows}</div>;
    }
}