import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it('renders a Mars Rover screen', () => {
        render(<App roverLocationX={0} roverLocationY={0}/>);

        const gridElement = screen.getByTestId('mars-rover-grid');
        expect(gridElement).toBeInTheDocument();

        const moveButton = screen.getByText('Move');
        expect(moveButton).toBeInTheDocument();
    });

    it ('should command rover to move and display the updated location in a label', () => {
        render(<App roverLocationX={0} roverLocationY={0}/>);

        const moveButton = screen.getByText('Move');
        fireEvent.click(moveButton);

        const locationLabel = screen.getByText('0:1:N');
        expect(locationLabel).toBeInTheDocument();
    });
});