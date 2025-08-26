export class MarsRoverController {
    execute(command: string) {
        const compass = new Compass();
        const directions = ["N", "W", "S", "E"];
        let directionIndex = 0
        for (const char of command) {
            if (char == "R") {
                directionIndex = compass.turnRight(directionIndex);
                
            } else if (char == "L") {
                directionIndex++;
                directionIndex = directionIndex % 4;
            } else {
                throw new Error("Unrecognised command");
            }
        }

        return directions[directionIndex];
    }
}

class Compass {
    directions = ["N", "W", "S", "E"];

    turnRight(directionIndex: number) {
        directionIndex--;
        if (directionIndex < 0) {
            directionIndex = this.directions.length - 1;
        }
        return directionIndex;
    }

}