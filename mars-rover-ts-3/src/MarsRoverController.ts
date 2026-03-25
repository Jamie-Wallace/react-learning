import {Compass} from "./Compass.ts";

export class MarsRoverController {
    compass = new Compass();
    
    execute(command: string) {
        console.warn(`${this.compass.getDirection()} - Direction: ${command}`)

        for (const char of command) {
            if (char == "R") {
                this.compass.turnRight();
            } else if (char == "L") {
                this.compass.turnLeft();
            } else {
                throw new Error("Unrecognised command");
            }
        }

        return this.compass.getDirection();
    }
}
