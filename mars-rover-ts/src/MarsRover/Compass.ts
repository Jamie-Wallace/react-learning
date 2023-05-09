import { Direction } from "./Direction";

export class Compass {
    direction: Direction = Direction.North;

    
    directionIndex: number = 0;
    directions = ['N', 'E', 'S', 'W'];

    turnLeft() { 
        this.directionIndex--;

        if (this.directionIndex < 0) {
            this.directionIndex = 3;
        }

        return this.directionIndex;
    }

    turnRight() { 
        this.directionIndex++;

        if (this.directionIndex > 3) {
            this.directionIndex = 0;
        }

        return this.directionIndex;
    }

    getDirection(){
        return this.directions[this.directionIndex];
    }
}