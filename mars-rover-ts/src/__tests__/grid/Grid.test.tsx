import { render, screen } from '@testing-library/react';
import { Grid } from '../../grid/Grid';
import { Square }  from '../../grid/Square';

jest.mock("../../grid/Square", () => ({
    default: () => <></>,
    Square: () => <div data-testid="squareId" />
  }));

describe('Grid', () => {
    it.each([
        [[[<Square />]], 1],
        [[[<Square />, <Square />]], 2],
        [[[<Square />, <Square />, <Square />]], 3],
        [[[<Square />, <Square />, <Square />, <Square />, <Square />, <Square />, <Square />, <Square />, <Square />, <Square />]], 10]
    ])
        ('renders expected rows', (squares, expectedLength) => {
            render(<Grid squares={squares} />);
            
            var foundSquares = screen.getAllByTestId("squareId");

            expect(foundSquares).toHaveLength(expectedLength);
        });

    it('renders 2 rows with 2 squares per row', () => {
        const view = render(<Grid squares={[[<Square />, <Square />], [<Square />, <Square />]]} />);

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