import {Compass} from "./Compass.ts";

export class MarsRoverController {
    compass = new Compass("N");
    
    execute(command: string) {
        for (const char of command) {
            if (char == "R") {
                this.compass.turnRight();
            } else if (char == "L") {
                this.compass.turnLeft();
            } else {
                throw new Error("Unrecognised command");
            }
        }

        return this.compass;
    }
}
