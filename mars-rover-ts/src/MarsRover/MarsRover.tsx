

export class MarsRover {
    execute(command: string) {
        let directions = ['N', 'E', 'S', 'W'];

        // if (command === 'M') {
        //     return `0:1:N`;
        // }

        // if (command === 'MM') {
        //     return `0:2:N`;
        // }

        // if (command === 'MMM') {
        //     return `0:3:N`;
        // }

        let directionIndex = 0;
        let moveIndex = 0;

        Array.from(command).forEach(character => {
            if (commandIsTurnLeft(character)) {
                directionIndex = turnLeft(directionIndex);
            }
            if (commandIsTurnRight(character)) {
                directionIndex = turnRight(directionIndex);
            }

            if (character === 'M') {
                moveIndex++;
            }
        });

        const direction = directions[directionIndex];
        return `0:${moveIndex}:${direction}`;
    }
}

function commandIsTurnLeft(commandCharacter: string): boolean {
    return commandCharacter === 'L';
}

function commandIsTurnRight(commandCharacter: string): boolean {
    return commandCharacter === 'R';
}

function turnLeft(directionIndex: number): number {
    directionIndex--;

    if (directionIndex < 0) {
        directionIndex = 3;
    }

    return directionIndex;
}

function turnRight(directionIndex: number): number {
    directionIndex++;

    if (directionIndex > 3) {
        directionIndex = 0;
    }

    return directionIndex;
}
