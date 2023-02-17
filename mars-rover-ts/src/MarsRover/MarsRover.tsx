

export class MarsRover {
    execute(command: string) {
        let directions = ['N', 'E', 'S', 'W'];

        const direction = directions[command.length];
        return `0:0:${direction}`;
    }
}
