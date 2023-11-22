import { MarsRoverController } from "./MarsRoverController";

describe("MarsRoverController", () => {
  it('should move', () => {

    // TODO: execute("M")???
    let controller = new MarsRoverController();
    controller.move();

    expect(controller.getPosition()).toBe("0, 1");
  });
});