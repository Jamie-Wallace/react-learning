
import { Position } from './Position';

export class MarsRover {
    execute(command: string) {
        let directionIndex = 0;
        let moveIndex = 0;

        Array.from(command).forEach(character => {
            if (this.commandIsTurnLeft(character)) {
                directionIndex = this.turnLeft(directionIndex);
            }
            if (this.commandIsTurnRight(character)) {
                directionIndex = this.turnRight(directionIndex);
            }

            if (this.commandIsMove(character)) {
                moveIndex = this.moveForwards(moveIndex);
            }
        });

        let directions = ['N', 'E', 'S', 'W'];
        const direction = directions[directionIndex];

        return new Position(direction, 0, moveIndex);
    }

    private commandIsMove(character: string): boolean {
        return character === 'M';
    }

    private moveForwards(moveIndex: number) {
        moveIndex++;

        if (moveIndex > 9) {
            moveIndex = 0;
        }
        return moveIndex;
    }

    private commandIsTurnLeft(commandCharacter: string): boolean {
        return commandCharacter === 'L';
    }

    private commandIsTurnRight(commandCharacter: string): boolean {
        return commandCharacter === 'R';
    }

    private turnLeft(directionIndex: number): number {
        directionIndex--;

        if (directionIndex < 0) {
            directionIndex = 3;
        }

        return directionIndex;
    }

    private turnRight(directionIndex: number): number {
        directionIndex++;

        if (directionIndex > 3) {
            directionIndex = 0;
        }

        return directionIndex;
    }
}
