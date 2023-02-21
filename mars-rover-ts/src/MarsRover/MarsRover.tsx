

export class MarsRover {
    execute(command: string) {
        let directions = ['N', 'E', 'S', 'W'];

        let directionIndex = 0;
        Array.from(command).forEach(character => {
            if (commandIsTurnLeft(character)) {
                directionIndex = turnLeft(directionIndex);
            }
            if (commandIsTurnRight(character)) {
                directionIndex = turnRight(directionIndex);
            }
        });

        const direction = directions[directionIndex];
        return `0:0:${direction}`;
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
