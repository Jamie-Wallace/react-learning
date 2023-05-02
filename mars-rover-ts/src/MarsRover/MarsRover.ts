import { Compass } from './Compass';
import { Coordinates } from './Coordinates';
import { Position } from './Position';

export class MarsRover {
    compass: Compass = new Compass();
    yMoveIndex: number = 0;
    xMoveIndex: number = 0;

    execute(command: string) {
        Array.from(command).forEach(character => {
            if (this.commandIsTurnLeft(character)) {
                this.compass.turnLeft();       
            }
            if (this.commandIsTurnRight(character)) {
                this.compass.turnRight();    
            }

            if (this.commandIsMove(character)) {
                if(this.compass.getDirection() === "E"){
                    this.xMoveIndex = this.moveForwards(this.xMoveIndex);
                }
                else if (this.compass.getDirection() === "S")
                {
                    this.yMoveIndex = this.moveBackwards(this.yMoveIndex);
                }
                else if (this.compass.getDirection() === "W")
                {
                    this.xMoveIndex = this.moveBackwards(this.xMoveIndex);
                }
                else 
                {
                    this.yMoveIndex = this.moveForwards(this.yMoveIndex);
                }
            }
        });

        return new Position(this.compass.getDirection(), new Coordinates(this.xMoveIndex, this.yMoveIndex));
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

    private moveBackwards(moveIndex: number) {
        moveIndex--;

        if (moveIndex < 0) {
            moveIndex = 2;
        }
        return moveIndex;
    }

    private commandIsTurnLeft(commandCharacter: string): boolean {
        return commandCharacter === 'L';
    }

    private commandIsTurnRight(commandCharacter: string): boolean {
        return commandCharacter === 'R';
    }
}
