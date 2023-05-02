import { } from '@testing-library/react';
import { MarsRover } from '../MarsRover/MarsRover';
import { Position } from '../MarsRover/Position';
import { Coordinates } from '../MarsRover/Coordinates';

describe('MarsRover', () => {
    let marsRover: MarsRover;

    beforeEach(() => {
        marsRover = new MarsRover();
    });

    it('does not move given an empty command', () => {
        var result = marsRover.execute('');

        var expectedPosition = new Position('N', new Coordinates(0, 0));

        expect(result).toEqual(expectedPosition);
    });

    it.each([
        ['R', new Position('E', new Coordinates(0, 0))],
        ['RR', new Position('S', new Coordinates(0, 0))],
        ['RRR', new Position('W', new Coordinates(0, 0))],
        ['RRRR', new Position('N', new Coordinates(0, 0))],
        ['RRRRR', new Position('E', new Coordinates(0, 0))],
    ])('should face correct direction after turning right', (command, expectedResult) => {
        var result = marsRover.execute(command);

        expect(result).toEqual(expectedResult);
    });

    it.each([
        ['L', new Position('W', new Coordinates(0, 0))],
        ['LL', new Position('S', new Coordinates(0, 0))],
        ['LLL', new Position('E', new Coordinates(0, 0))],
        ['LLLL', new Position('N', new Coordinates(0, 0))],
        ['LLLLL', new Position('W', new Coordinates(0, 0))],
    ])('should face correct direction after turning left', (command, expectedResult) => {
        var result = marsRover.execute(command);

        expect(result).toEqual(expectedResult);
    });

    it('handles a combination of different turn commands', () => {
        var result = marsRover.execute('LLRL');

        expect(result).toEqual(new Position('S', new Coordinates(0, 0)));
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

    it('can turn east and move', () => {
        var result = marsRover.execute('RM');

        expect(result.compass).toEqual('E');
        expect(result.coordinate.positionX).toEqual(1);
        expect(result.coordinate.positionY).toEqual(0);
    });

    it('can turn south and move', () => {
        var result = marsRover.execute('RRM');

        expect(result.compass).toEqual('S');
        expect(result.coordinate.positionX).toEqual(0);
        expect(result.coordinate.positionY).toEqual(2);
    });

    it('can turn west and move', () => {
        var result = marsRover.execute('LM');

        expect(result.compass).toEqual('W');
        expect(result.coordinate.positionX).toEqual(2);
        expect(result.coordinate.positionY).toEqual(0);
    });
});