import { render, screen } from '@testing-library/react';
import App from '../App';

describe('MarsRover', () => {
    test('renders a grid', () => {
        render(<App />);

        const row1 = screen.getByTestId('row_1');
        expect(row1.childNodes).toHaveLength(10);
    });
});