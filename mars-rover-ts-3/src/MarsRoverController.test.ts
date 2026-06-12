import { MarsRoverController } from "./MarsRoverController.ts";
import { Coordinate } from "./Coordinate.ts";

import { vi } from "vitest";
import {Pose} from "./Pose.ts";

// vi.mock("./Coordinate");
vi.mock("./Pose");

describe("MarsRoverController", () => {
    it('should handle unrecognised command', () => {
        let controller = new MarsRoverController();

        expect(() => controller.execute("UL")).toThrow("Unrecognised command");
    });

    it.each([
        ["L", 1],
        ["LL", 2],
        ["LLL", 3],
        ["LLLL", 4],
        ["LLLLL", 5],
        ["LLLLLL", 6],
        ["LLLLLLLLLL", 10],
    ])(
        "when command is %s, should turn left %d times",
        (command, expectedTurnCount) => {
            let turnLeftFunction = vi.fn(function (this: Pose) {
                return this;
            });

            Pose.prototype.turnLeft = turnLeftFunction;

            let controller = new MarsRoverController();

            controller.execute(command);

            expect(turnLeftFunction).toHaveBeenCalledTimes(expectedTurnCount);
        }
    );

    it.each([
        ["R", 1],
        ["RR", 2],
        ["RRR", 3],
        ["RRRR", 4],
        ["RRRRR", 5],
        ["RRRRRR", 6],
        ["RRRRRRRRRR", 10],
    ])(
        "when command is %s, should turn right to face %s",
        (command, expectedTurnCount) => {
            let turnRightFunction = vi.fn(function (this: Pose) {
                return this;
            });

            Pose.prototype.turnRight = turnRightFunction;
            let controller = new MarsRoverController();

            controller.execute(command);

            expect(turnRightFunction).toHaveBeenCalledTimes(expectedTurnCount);
        }
    );
    
    it.each([
        ["LR", "N"],
        ["LRRLLRL", "W"],
    ])(
        "when command is %s, should turn left and right to face %s",
        (command, expectedDirection) => {
            let controller = new MarsRoverController();

            let pose = controller.execute(command);

            expect(pose.getDirection()).toBe(expectedDirection);
        }
    );

    
    it("when command is M, should not throw an error", () => {
            let controller = new MarsRoverController();

            expect(() => controller.execute("M")).not.toThrow();
        }
    );

    
    it("when command is M, should tell coordinate to move", () => {
            let moveFunction = vi.fn();
        
            Coordinate.prototype.move = moveFunction;
            let controller = new MarsRoverController();
        
            controller.execute("M");
                
            expect(moveFunction).toHaveBeenCalledTimes(1);
        }
    );

    // it.each([
    //     ["M", 0, 1],
    // ])(
    //     "when command is %s, should move to %s, %s",
    //     (command, expectedX, expectedY) => {
    //         let controller = new MarsRoverController();
    //
    //         let pose = controller.execute(command);
    //
    //         let coordinate = pose.getCoordinate();
    //         expect(coordinate.x).toBe(expectedX);
    //         expect(coordinate.y).toBe(expectedY);
    //     }
    // );
    
    it("should maintain state after executing", ()  => {
            let expectedDirection = "S"
            let controller = new MarsRoverController();

            controller.execute("R");
            let pose = controller.execute("R");

            expect(pose.getDirection()).toBe(expectedDirection);
        }
    );
});