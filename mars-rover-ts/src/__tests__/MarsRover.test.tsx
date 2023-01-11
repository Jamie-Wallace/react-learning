import { render, screen } from '@testing-library/react';
import App from '../App';

describe('MarsRover', () => {
    test('renders some text', () => {
        render(<App />);
        const linkElement = screen.getByText('Mars Rover');
        expect(linkElement).toBeInTheDocument();
    });
});