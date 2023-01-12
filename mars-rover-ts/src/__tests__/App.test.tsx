import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
    it('renders a grid', () => {
        render(<App />);

        const gridElement = screen.getByTestId('mars-rover-grid');
        expect(gridElement).toBeInTheDocument();
        //  screen.findByTestId('mars-rover-grid');
    });
});