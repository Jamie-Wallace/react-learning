import {Compass} from "./Compass.ts";
import {Pose} from "./Pose.ts";

describe("MarsRoverController", () => {
    it.each([
        [new Compass("N"), "W"],
        [new Compass("W"), "S"],
        [new Compass("S"), "E"],
        [new Compass("E"), "N"],
    ])(
        "when facing %s, should turn left to face %s",
        (startingDirection, expectedDirection) => {
            let pose = new Pose(startingDirection);

            let actualPose = pose.turnLeft();

            expect(actualPose.getDirection()).toBe(expectedDirection);
        }
    );

    it.each([
        [new Compass("N"), "E"],
        [new Compass("E"), "S"],
        [new Compass("S"), "W"],
        [new Compass("W"), "N"],
    ])(
        "when facing %s, should turn right to face %s",
        (startingDirection, expectedDirection) => {
            let pose = new Pose(startingDirection);

            let actualPose = pose.turnRight();

            expect(actualPose.getDirection()).toBe(expectedDirection);
        }
    );
});