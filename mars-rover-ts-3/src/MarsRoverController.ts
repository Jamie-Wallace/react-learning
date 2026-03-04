import {Compass} from "./Compass.ts";

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
