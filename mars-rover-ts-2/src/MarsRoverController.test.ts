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

      expect(direction).toBe(`0:0:${expectedDirection}`);
    }
  );

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

      expect(direction).toBe(`0:0:${expectedDirection}`);
    }
  );

  it.each([
    ["LR", "N"],
    ["LRR", "E"],
    ["LRRR", "S"],
    ["RL", "N"],
    ["RLLLRL", "S"],
  ])(
    "when command is %s, should turn to face %s",
    (command, expectedDirection) => {
      let controller = new MarsRoverController();

      let direction = controller.execute(command);

      expect(direction).toBe(`0:0:${expectedDirection}`);
    }
  );

  it.each([
    ["", "0:0:N"],
    ["M", "0:1:N"],
  ])(
    "when command is %s, position should be %s",
    (command, expectedPosition) => {
      let controller = new MarsRoverController();

      let position = controller.execute(command);

      expect(position).toBe(expectedPosition);
    }
  );
});
