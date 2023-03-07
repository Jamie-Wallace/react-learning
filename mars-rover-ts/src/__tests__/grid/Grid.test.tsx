import { render, screen } from '@testing-library/react';
import { Grid } from '../../grid/Grid';

describe('Grid', () => {
    it.each([
        [[['']], 1], 
        [[[''],['']], 2], 
        [[[''],[''],['']], 3], 
    ])
    ('renders expected rows', (squares, expectedLength) => {
        const view = render(<Grid squares={squares} roverLocationX={0} roverLocationY={0} />);

        const grid = view.container.childNodes[0];

        expect(grid.childNodes).toHaveLength(expectedLength);
    });

    it('renders a square in a row', () => {
        const view = render(<Grid squares={[['This is a square']]} roverLocationX={0} roverLocationY={0} />);

        const grid = view.container.childNodes[0];


        expect(grid).toHaveTextContent("This is a square");
    });

    
    it.skip.each([
        [0, 0],
        [0, 5], 
        [6, 3]
    ])('indicates correct rover position', (x, y) => {
        render(<Grid squares={[[]]} roverLocationX={x} roverLocationY={y} />);

        let testId = `square_${x}_${y}`;
        const squareWithRover = screen.getByTestId(testId);

        expect(squareWithRover).toHaveTextContent('^');
    });
});