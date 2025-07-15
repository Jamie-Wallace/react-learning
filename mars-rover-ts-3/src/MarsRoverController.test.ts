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
});