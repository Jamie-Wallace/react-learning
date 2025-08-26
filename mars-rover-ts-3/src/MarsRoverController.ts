export class MarsRoverController {
    execute(command: string) {
        const compass = new Compass();
        let directionIndex = 0
        for (const char of command) {
            if (char == "R") {
                directionIndex = compass.turnRight(directionIndex);
            } else if (char == "L") {
                directionIndex = compass.turnLeft(directionIndex);
            } else {
                throw new Error("Unrecognised command");
            }
        }

        return compass.getDirection(directionIndex);
    }
}

class Compass {
    directions = ["N", "W", "S", "E"];

    
    getDirection(directionIndex: number) {
        return this.directions[directionIndex];
    }
    
    turnLeft(directionIndex: number): number {
        directionIndex++;
        directionIndex = directionIndex % 4;
        return directionIndex;
    }

    turnRight(directionIndex: number) {
        directionIndex--;
        if (directionIndex < 0) {
            directionIndex = this.directions.length - 1;
        }
        return directionIndex;
    }

}