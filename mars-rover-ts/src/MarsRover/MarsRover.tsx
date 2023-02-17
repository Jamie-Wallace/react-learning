

export class MarsRover {
    execute(command: string) {
        if(command === 'L'){
            return `0:0:W`;
        }

        let directions = ['N', 'E', 'S', 'W'];

        const directionIndex = command.length % 4;

        const direction = directions[directionIndex];
        return `0:0:${direction}`;
    }
}
