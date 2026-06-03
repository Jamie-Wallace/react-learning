import { Compass } from "./Compass.ts";
import { Coordinate } from "./Coordinate.ts";
import {Pose} from "./Pose.ts";

// TODO: make Pose immutable - see MR2.
export class MarsRoverController {
    pose = new Pose(new Compass("N"));

    execute(command: string): Pose {
        for (const char of command) {
            if (char == "R") {
                this.pose = this.pose.turnRight();
            } else if (char == "L") {
                this.pose = this.pose.turnLeft();
            } else if (char == "M") {
                new Coordinate().move();
            } else {
                throw new Error(`Unrecognised command: ${char}`);
            }
        }

        return this.pose;
    }
}
