

export class MarsRover {
    execute(command: string) {
        let directions = ['N', 'E', 'S', 'W'];

        let directionIndex = 0;

        Array.from(command).forEach(character => {
            if (character === 'L') {
                directionIndex--;
            }
            if (character === 'R') {
                directionIndex++;
            }
            if (directionIndex < 0) {
                directionIndex = 3;
            }
            if (directionIndex > 3) {
                directionIndex = 0;
            }
        });

        const direction = directions[directionIndex];
        return `0:0:${direction}`;
    }
}
