import { } from '@testing-library/react';
import { MarsRover } from '../MarsRover/MarsRover';

describe('MarsRover', () => {
    let marsRover: MarsRover;

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

    it.each([
        ['L', '0:0:W'],
        ['LL', '0:0:S'],
        ['LLL', '0:0:E'],
        ['LLLL', '0:0:N'],
        ['LLLLL', '0:0:W'],
    ])('should face correct direction after turning left', (command, expectedResult) => {
        var result = marsRover.execute(command);

        expect(result).toEqual(expectedResult);
    });

    it('handles a combination of different turn commands', () => {
        var result = marsRover.execute('LLRL');

        expect(result).toEqual('0:0:S');
    });

    it.each([
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
});