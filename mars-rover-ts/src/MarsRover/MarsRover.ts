
import { Position } from './Position';

export class MarsRover {
    directionIndex: number = 0;
    moveIndex: number = 0;

    execute(command: string) {

        Array.from(command).forEach(character => {
            if (this.commandIsTurnLeft(character)) {
                this.directionIndex = this.turnLeft(this.directionIndex);
            }
            if (this.commandIsTurnRight(character)) {
                this.directionIndex = this.turnRight(this.directionIndex);
            }

            if (this.commandIsMove(character)) {
                this.moveIndex = this.moveForwards(this.moveIndex);
            }
        });

        let directions = ['N', 'E', 'S', 'W'];
        const direction = directions[this.directionIndex];

        return new Position(direction, 0, this.moveIndex);
    }

    private commandIsMove(character: string): boolean {
        return character === 'M';
    }

    private moveForwards(moveIndex: number) {
        moveIndex++;

        if (moveIndex > 2) {
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
