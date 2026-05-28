import { Coordinate } from "./Coordinate.ts";
import {Pose} from "./Pose.ts";

export class MarsRoverController {
    pose = new Pose();
    // compass = new Compass("N");

    execute(command: string): Pose {
        for (const char of command) {
            if (char == "R") {
                this.pose.compass.turnRight();
            } else if (char == "L") {
                this.pose.compass.turnLeft();
            } else if (char == "M") {
                new Coordinate().move();
            } else {
                throw new Error(`Unrecognised command: ${char}`);
            }
        }

        return this.pose;
    }
}
