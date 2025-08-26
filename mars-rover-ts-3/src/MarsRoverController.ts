export class MarsRoverController {
    execute(command: string) {
        const compass = new Compass();
        
        for (const char of command) {
            if (char == "R") {
                compass.turnRight();
            } else if (char == "L") {
                compass.turnLeft();
            } else {
                throw new Error("Unrecognised command");
            }
        }

        return compass.getDirection();
    }
}

class Compass {
    directions = ["N", "W", "S", "E"];
    directionIndex = 0
    
    getDirection() {
        return this.directions[this.directionIndex];
    }

    turnLeft(): number {
        this.directionIndex++;
        this.directionIndex = this.directionIndex % 4;
        return this.directionIndex;
    }

    turnRight() {
        this.directionIndex--;
        if (this.directionIndex < 0) {
            this.directionIndex = this.directions.length - 1;
        }
        return this.directionIndex;
    }

}