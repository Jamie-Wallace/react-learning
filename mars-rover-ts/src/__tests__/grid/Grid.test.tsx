import { render, screen } from '@testing-library/react';
import { Grid } from '../../grid/Grid';

describe('Grid', () => {
    it('renders ten rows', () => {
        const view = render(<Grid squares={[]} roverLocationX={0} roverLocationY={0} />);

        const grid = view.container.childNodes[0];

        expect(grid.childNodes).toHaveLength(10);
    });

    it.each([
        [0, 0],
        [0, 5], 
        [6, 3]
    ])('indicates correct rover position', (x, y) => {
        render(<Grid squares={[]} roverLocationX={x} roverLocationY={y} />);

        let testId = `square_${x}_${y}`;
        const squareWithRover = screen.getByTestId(testId);

        expect(squareWithRover).toHaveTextContent('^');
    });
});