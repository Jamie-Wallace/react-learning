import { } from '@testing-library/react';
import { MarsRover } from '../MarsRover/MarsRover';
import { Position } from '../MarsRover/Position';

describe('MarsRover', () => {
    let marsRover: MarsRover;

    beforeEach(() => {
        marsRover = new MarsRover();
    });

    it('does not move given an empty command', () => {
        var result = marsRover.execute('');

        var expectedPosition = new Position('N', 0, 0);

        expect(result).toEqual(expectedPosition);
    });

    it.each([
        ['R', new Position('E', 0, 0)],
        ['RR', new Position('S', 0, 0)],
        ['RRR', new Position('W', 0, 0)],
        ['RRRR', new Position('N', 0, 0)],
        ['RRRRR', new Position('E', 0, 0)],
    ])('should face correct direction after turning right', (command, expectedResult) => {
        var result = marsRover.execute(command);

        expect(result).toEqual(expectedResult);
    });

    it.each([
        ['L', new Position('W', 0, 0)],
        ['LL', new Position('S', 0, 0)],
        ['LLL', new Position('E', 0, 0)],
        ['LLLL', new Position('N', 0, 0)],
        ['LLLLL', new Position('W', 0, 0)],
    ])('should face correct direction after turning left', (command, expectedResult) => {
        var result = marsRover.execute(command);

        expect(result).toEqual(expectedResult);
    });

    it('handles a combination of different turn commands', () => {
        var result = marsRover.execute('LLRL');

        expect(result).toEqual(new Position('S', 0, 0));
    });

    it.skip.each([
        ['M', '0:1:N'],
        ['MM', '0:2:N'],
        ['MMM', '0:3:N'],
        ['MMMMM', '0:5:N'],
        ['MMMMMMMMM', '0:9:N'],
        ['MMMMMMMMMM', '0:0:N'],
    ])('should be at the correct coordinate after moving', (command, expectedResult) => {
        var result = marsRover.execute(command);

        expect(result).toEqual(expectedResult);
    });

    it.skip('can turn and move', () => {
        var result = marsRover.execute('RMM');

        expect(result).toEqual('2:0:E');
    });
});