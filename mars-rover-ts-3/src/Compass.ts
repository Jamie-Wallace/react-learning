export class Compass {
    public static readonly directions = ["N", "W", "S", "E"];
    public readonly directionIndex;

    constructor(direction: string) {
        this.directionIndex = Compass.directions.indexOf(direction);
    }

    getDirection() {
        return Compass.directions[this.directionIndex];
    }

    turnLeft(): Compass {
        let newDirection = this.directionIndex + 1;
        newDirection = newDirection % Compass.directions.length;
        return new Compass(Compass.directions[newDirection]);
    }

    turnRight(): Compass {
        let newDirection = this.directionIndex - 1;
        if (newDirection < 0) {
            newDirection = Compass.directions.length - 1;
        }
        return new Compass(Compass.directions[newDirection]);
    }
}