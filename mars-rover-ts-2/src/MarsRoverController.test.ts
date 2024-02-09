import { MarsRoverController } from "./MarsRoverController";

describe("MarsRoverController", () => {
  it.each([
    ["R", "E"],
    ["RR", "S"],
    ["RRR", "W"],
    ["RRRR", "N"],
    ["RRRRR", "E"],
    ["RRRRRR", "S"],
    ["RRRRRRRRRR", "S"],
  ])(
    "when command is %s, should turn left to face %s",
    (command, expectedDirection) => {
      let controller = new MarsRoverController();

      let direction = controller.execute(command);

      expect(direction).toBe(expectedDirection);
    }
  );

  it.each([
    ["L", "W"],
    ["LL", "S"],
    ["LLL", "E"],
    ["LLLL", "N"],
    ["LLLLL", "W"],
  ])(
    "when command is %s, should turn left to face %s",
    (command, expectedDirection) => {
      let controller = new MarsRoverController();

      let direction = controller.execute(command);

      expect(direction).toBe(expectedDirection);
    }
  );
});
