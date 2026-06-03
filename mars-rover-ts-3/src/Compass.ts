export class Compass {
    public readonly directions = ["N", "W", "S", "E"];
    public readonly directionIndex;

    constructor(direction: string) {
        this.directionIndex = this.directions.indexOf(direction);
    }

    getDirection() {
        return this.directions[this.directionIndex];
    }

    turnLeft(): Compass {
        let currentDirection = this.directionIndex;
        currentDirection++;
        currentDirection = currentDirection % 4;
        return new Compass(this.directions[currentDirection]);
    }

    turnRight(): Compass {
        let currentDirection = this.directionIndex;
        currentDirection--;
        if (currentDirection < 0) {
            currentDirection = this.directions.length - 1;
        }
        return new Compass(this.directions[currentDirection]);
    }
}