import { MarsRoverController } from "./MarsRoverController";

describe("MarsRoverController", () => {
  it.each([
          ["R", "E"],
          ["RR", "S"],
          ["RRR", "W"],
          ["RRRR", "N"]])
  ('should turn', (command, expectedDirection) => {
    let controller = new MarsRoverController();

    let direction = controller.execute(command);

    expect(direction).toBe(expectedDirection);
  });
});
