import { Direction } from "./Direction";

export class Compass {
    direction: Direction = Direction.North;

    turnLeft() { 
        this.direction--;
        if (this.direction < 0) {
            this.direction = 3;
        }
    }

    turnRight() { 
        this.direction++;
        if (this.direction > 3) {
            this.direction = 0;
        }
    }

    getDirection() {
        return this.direction;
    }

    isNorth() {
        return this.direction === Direction.North;
    }

    isEast() {
        return this.direction === Direction.East;
    }

    isSouth() {
        return this.direction === Direction.South;
    }

    isWest() {
        return this.direction === Direction.West;
    }
}