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
        
        const rover = screen.getByText('^');
        
        expect(rover).toBeInTheDocument();
    });
});