import { render, screen } from '@testing-library/react';
import { Grid } from '../../grid/Grid';

describe('Grid', () => {
    it('renders ten rows', () => {
        const view = render(<Grid />);
        const grid = view.container.childNodes[0];

        expect(grid.childNodes).toHaveLength(10);
    });
});