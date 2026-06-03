import {Compass} from "./Compass.ts";

export class Pose {
    constructor(
        private readonly compass: Compass
    ) {}

    getDirection() {
        return this.compass.getDirection();
    }

    turnRight() {
        return new Pose(this.compass.turnRight());
    }

    turnLeft() {
        return new Pose(this.compass.turnLeft());
    }
}