import { } from '@testing-library/react';
import { MarsRover } from '../MarsRover/MarsRover';
import { Position } from '../MarsRover/Position';
import { Coordinates } from '../MarsRover/Coordinates';
import { Direction } from '../MarsRover/Direction';

describe('MarsRover', () => {
    let marsRover: MarsRover;

    beforeEach(() => {
        marsRover = new MarsRover();
    });

    it('does not move given an empty command', () => {
        var result = marsRover.execute('');

        var expectedPosition = new Position(Direction.North, new Coordinates(0, 0));

        expect(result).toEqual(expectedPosition);
    });

    it.each([
        ['R', new Position(Direction.East, new Coordinates(0, 0))],
        ['RR', new Position(Direction.South, new Coordinates(0, 0))],
        ['RRR', new Position(Direction.West, new Coordinates(0, 0))],
        ['RRRR', new Position(Direction.North, new Coordinates(0, 0))],
        ['RRRRR', new Position(Direction.East, new Coordinates(0, 0))],
    ])('should face correct direction after turning right', (command, expectedResult) => {
        var result = marsRover.execute(command);

        expect(result).toEqual(expectedResult);
    });

    it.each([
        ['L', new Position(Direction.West, new Coordinates(0, 0))],
        ['LL', new Position(Direction.South, new Coordinates(0, 0))],
        ['LLL', new Position(Direction.East, new Coordinates(0, 0))],
        ['LLLL', new Position(Direction.North, new Coordinates(0, 0))],
        ['LLLLL', new Position(Direction.West, new Coordinates(0, 0))],
    ])('should face correct direction after turning left', (command, expectedResult) => {
        var result = marsRover.execute(command);

        expect(result).toEqual(expectedResult);
    });

    it('handles a combination of different turn commands', () => {
        var result = marsRover.execute('LLRL');

        expect(result).toEqual(new Position(Direction.South, new Coordinates(0, 0)));
    });

    it.skip.each([
        ['M', '0:1:North'],
        ['MM', '0:2:North'],
        ['MMM', '0:3:North'],
        ['MMMMM', '0:5:North'],
        ['MMMMMMMMM', '0:9:North'],
        ['MMMMMMMMMM', '0:0:North'],
    ])('should be at the correct coordinate after moving', (command, expectedResult) => {
        var result = marsRover.execute(command);

        expect(result).toEqual(expectedResult);
    });

    it('can turn east and move', () => {
        var result = marsRover.execute('RM');

        expect(result.compass).toEqual(Direction.East);
        expect(result.coordinate.positionX).toEqual(1);
        expect(result.coordinate.positionY).toEqual(0);
    });

    it('can turn south and move', () => {
        var result = marsRover.execute('RRM');

        expect(result.compass).toEqual(Direction.South);
        expect(result.coordinate.positionX).toEqual(0);
        expect(result.coordinate.positionY).toEqual(9);
    });

    it('can turn west and move', () => {
        var result = marsRover.execute('LM');

        expect(result.compass).toEqual(Direction.West);
        expect(result.coordinate.positionX).toEqual(9);
        expect(result.coordinate.positionY).toEqual(0);
    });
});