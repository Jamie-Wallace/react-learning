export class Compass {
    directions = ["N", "W", "S", "E"];
    directionIndex = 0

    constructor(direction: string) {
        this.directionIndex = this.directions.indexOf(direction);
    }

    getDirection() {
        return this.directions[this.directionIndex];
    }

    turnLeft(): Compass {
        this.directionIndex++;
        this.directionIndex = this.directionIndex % 4;
        return this;
    }

    turnRight(): Compass {
        this.directionIndex--;
        if (this.directionIndex < 0) {
            this.directionIndex = this.directions.length - 1;
        }
        return this;
    }
}