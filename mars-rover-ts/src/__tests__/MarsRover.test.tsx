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

    it('should turn right', () => {
        var result = marsRover.execute('R');

        expect(result).toEqual('0:0:E');
    });

    it('should turn right twice', () => {
        var result = marsRover.execute('RR');

        expect(result).toEqual('0:0:S');
    });

    it('should turn right three times', () => {
        var result = marsRover.execute('RRR');

        expect(result).toEqual('0:0:W');
    });
});
