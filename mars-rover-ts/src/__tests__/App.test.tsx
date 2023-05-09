import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '../App';

describe('App', () => {
    it('renders a Mars Rover screen', () => {
        render(<App />);

        const gridElement = screen.getByTestId('mars-rover-grid');
        expect(gridElement).toBeInTheDocument();

        const moveButton = screen.getByText('Move');
        expect(moveButton).toBeInTheDocument();
    });

    it ('should command rover to move and display the updated location in a label', () => {
        render(<App />);

        const moveButton = screen.getByText('Move');
        fireEvent.click(moveButton);

        const locationLabel = screen.getByText('0:1:North');
        expect(locationLabel).toBeInTheDocument();
    });

    it.each(
        [
            [1, 'East', '>'],
            [2, 'South', 'V'],
            [3, 'West', '<'],
            [4, 'North', '^']
        ]
    )('should command rover to turn and display updated position in a label', (timesToTurn, compass, roverDisplay) => {
        render(<App />);

        const turnRightButton = screen.getByText('R');
        for(let i = 0; i < timesToTurn; i++){
            fireEvent.click(turnRightButton);
        }

        const locationLabel = screen.getByText(`0:0:${compass}`);
        expect(locationLabel).toBeInTheDocument();

        const rover = screen.getByText(roverDisplay);
        expect(rover).toBeInTheDocument();
    });
});