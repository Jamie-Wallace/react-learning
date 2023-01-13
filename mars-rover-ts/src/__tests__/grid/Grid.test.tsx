import { render, screen } from '@testing-library/react';
import { Grid } from '../../grid/Grid';

describe('Grid', () => {
    it('renders ten rows', () => {
        const view = render(<Grid squares={[]} roverLocationX={0} roverLocationY={0} />);

        const grid = view.container.childNodes[0];

        expect(grid.childNodes).toHaveLength(10);
    });

    it('shows the rover at start position', () => {
        render(<Grid squares={[]} roverLocationX={0} roverLocationY={0} />);

        const squareWithRover = screen.getByTestId('0_0');

        expect(squareWithRover).toHaveTextContent('^');
    });

    it('shows the rover after it has moved forwards', () => {
        render(<Grid squares={[]} roverLocationX={0} roverLocationY={5} />);

        const squareWithRover = screen.getByTestId('0_5');

        expect(squareWithRover).toHaveTextContent('^');
    });

    it('shows the rover after it has rotated and moved', () => {
        render(<Grid squares={[]} roverLocationX={6} roverLocationY={3} />);

        const squareWithRover = screen.getByTestId('6_3');

        expect(squareWithRover).toHaveTextContent('^');
    });
});