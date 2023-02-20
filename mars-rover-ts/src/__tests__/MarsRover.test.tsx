import {} from '@testing-library/react';
import { MarsRover } from '../MarsRover/MarsRover';

describe('MarsRover', () => {
    let marsRover : MarsRover;

    beforeEach(() => {
        marsRover = new MarsRover();
    });

    it('does not move given an empty command', () => {
        var result = marsRover.execute('');

        expect(result).toEqual('0:0:N');
    });

    it.each([
        ['R', '0:0:E'],
        ['RR', '0:0:S'],
        ['RRR', '0:0:W'],
        ['RRRR', '0:0:N'],
        ['RRRRR', '0:0:E'],
    ])('should face correct direction after turning right', (command, expectedResult) => {
        var result = marsRover.execute(command);

        expect(result).toEqual(expectedResult);
    });

    it('turns left once', () => {
        var result = marsRover.execute('L');

        expect(result).toEqual('0:0:W');
    });
});
