import { render, screen } from '@testing-library/react';
import App from '../App';

describe('MarsRover', () => {
    test('renders a grid', () => {
        render(<App />);
        const square1 = screen.getByTestId('square1');
        expect(square1).toBeInTheDocument();
    });
});