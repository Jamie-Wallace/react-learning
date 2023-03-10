import { render, screen } from '@testing-library/react';
import { Grid } from '../../grid/Grid';

describe('Grid', () => {
    it.each([
        [[['']], 1],
        [[[''], ['']], 2],
        [[[''], [''], ['']], 3],
    ])
        ('renders expected rows', (squares, expectedLength) => {
            const view = render(<Grid squares={squares} />);

            const grid = view.container.childNodes[0];

            expect(grid.childNodes).toHaveLength(expectedLength);
        });

    it('renders 10 squares in a row', () => {
        const view = render(<Grid squares={[['Square1', 'Square2', 'Square3', 'Square4', 'Square5', 'Square6', 'Square7', 'Square8', 'Square9', 'Square10']]} />);

        const grid = view.container.childNodes[0];

        expect(grid).toHaveTextContent('Square1');
        expect(grid).toHaveTextContent('Square5');
        expect(grid).toHaveTextContent('Square10');
    });


    it('renders 2 rows with 2 squares per row', () => {
        const view = render(<Grid squares={[['', ''], ['', '']]} />);

        const grid = view.container.childNodes[0];
        expect(grid.childNodes).toHaveLength(2);

        const row1 = grid.childNodes[0];
        expect(row1.childNodes).toHaveLength(2);

        const row2 = grid.childNodes[1];
        expect(row2.childNodes).toHaveLength(2);
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