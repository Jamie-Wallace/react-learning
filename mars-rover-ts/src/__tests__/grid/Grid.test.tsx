import { render, screen } from '@testing-library/react';
import { Grid } from '../../grid/Grid';

describe('Grid', () => {
    it.each([
        [[['']], 1], 
        [[[''],['']], 2], 
        [[[''],[''],['']], 3], 
    ])
    ('renders expected rows', (squares, expectedLength) => {
        const view = render(<Grid squares={squares} />);

        const grid = view.container.childNodes[0];

        expect(grid.childNodes).toHaveLength(expectedLength);
    });

    it('renders a square in a row', () => {
        const view = render(<Grid squares={[['This is a square']]} />);

        const grid = view.container.childNodes[0];

        expect(grid).toHaveTextContent("This is a square");
    });

    it('renders 2 squares in a row', () => {
        const view = render(<Grid squares={[['Square1', 'Square2']]} />);

        const grid = view.container.childNodes[0];

        expect(grid).toHaveTextContent('Square1');
        expect(grid).toHaveTextContent('Square2');
    });

    
    it.skip.each([
        [0, 0],
        [0, 5], 
        [6, 3]
    ])('indicates correct rover position', (x, y) => {
        render(<Grid squares={[[]]} />);

        let testId = `square_${x}_${y}`;
        const squareWithRover = screen.getByTestId(testId);

        expect(squareWithRover).toHaveTextContent('^');
    });
});