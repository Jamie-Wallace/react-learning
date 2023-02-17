import {} from '@testing-library/react';
import { MarsRover } from '../MarsRover/MarsRover';

describe('MarsRover', () => {
    it('does not move given an empty command', () => {
        
        var marsRover = new MarsRover();

        var result = marsRover.execute('');

        expect(result).toEqual('0:0:N');
    });
});


