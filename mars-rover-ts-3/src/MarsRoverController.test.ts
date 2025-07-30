import {MarsRoverController} from "./MarsRoverController.ts";

describe("MarsRoverController", () => {
    it('should handle unrecognised command', () => {
        let controller = new MarsRoverController();

        expect(() => controller.execute("UL")).toThrow("Unrecognised command");
    });

    it.each([
        ["L", "W"],
        ["LL", "S"],
        ["LLL", "E"],
        ["LLLL", "N"],
        ["LLLLL", "W"],
        ["LLLLLL", "S"],
        ["LLLLLLLLLL", "S"],
    ])(
        "when command is %s, should turn left to face %s",
        (command, expectedDirection) => {
            let controller = new MarsRoverController();

            let direction = controller.execute(command);

            expect(direction).toBe(expectedDirection);
        }
    );

    it.each([
        ["R", "E"],
        ["RR", "S"],
        ["RRR", "W"],
        ["RRRR", "N"],
        ["RRRRR", "E"],
        ["RRRRRR", "S"],
        ["RRRRRRRRRR", "S"],
    ])(
        "when command is %s, should turn right to face %s",
        (command, expectedDirection) => {
            let controller = new MarsRoverController();

            let direction = controller.execute(command);

            expect(direction).toBe(expectedDirection);
        }
    );
    
    it.each([
        ["LR", "N"],
    ])(
        "when command is %s, should turn left and right to face %s",
        (command, expectedDirection) => {
            let controller = new MarsRoverController();

            let direction = controller.execute(command);

            expect(direction).toBe(expectedDirection);
        }
    );
});