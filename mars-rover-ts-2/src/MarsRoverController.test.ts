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
  ])("should turn right", (command, expectedDirection) => {
    let controller = new MarsRoverController();

    let direction = controller.execute(command);

    expect(direction).toBe(expectedDirection);
  });

  it.each([
    ["L", "W"],
    ["LL", "S"],
  ])("should turn left", (command, expectedDirection) => {
    let controller = new MarsRoverController();

    let direction = controller.execute(command);

    expect(direction).toBe(expectedDirection);
  });
});
