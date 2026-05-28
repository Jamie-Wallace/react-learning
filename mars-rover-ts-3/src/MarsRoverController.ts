import { Coordinate } from "./Coordinate.ts";
import {Pose} from "./Pose.ts";

// TODO: make Pose immutable - see MR2.
export class MarsRoverController {
    pose = new Pose();

    execute(command: string): Pose {
        for (const char of command) {
            if (char == "R") {
                this.pose.turnRight();
            } else if (char == "L") {
                this.pose.turnLeft();
            } else if (char == "M") {
                new Coordinate().move();
            } else {
                throw new Error(`Unrecognised command: ${char}`);
            }
        }

        return this.pose;
    }
}
