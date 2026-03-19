export class Compass {
    directions = ["N", "W", "S", "E"];
    directionIndex = 0

    getDirection() {
        return this.directions[this.directionIndex];
    }

    turnLeft() {
        this.directionIndex++;
        this.directionIndex = this.directionIndex % 4;
    }

    turnRight() {
        this.directionIndex--;
        if (this.directionIndex < 0) {
            this.directionIndex = this.directions.length - 1;
        }
    }
}