import {Compass} from "./Compass.ts";

export class Pose {
    compass = new Compass("N");

    getDirection() {
        return this.compass.getDirection();
    }

    turnRight() {
        return this.compass.turnRight();
    }

    turnLeft() {
        return this.compass.turnLeft();
    }
}