import { render, screen } from '@testing-library/react';
import {Row} from '../../grid/Row';

describe('Row', () => {
    it('renders ten squares', () => {
        const view = render(<Row roverPositionIndex={-1} />);
        const row = view.container.childNodes[0];

        expect(row.childNodes).toHaveLength(10);
    });
});