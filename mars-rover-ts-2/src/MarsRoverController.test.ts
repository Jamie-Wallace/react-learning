import { MarsRoverController } from "./MarsRoverController";

describe("MarsRoverController", () => {
  it('should start at position', () => {

    // TODO: execute("M")???
    let controller = new MarsRoverController();

    expect(controller.getPosition()).toBe("0, 0");
  });

  it('should move', () => {

    // TODO: execute("M")???
    let controller = new MarsRoverController();
    controller.move();

    expect(controller.getPosition()).toBe("0, 1");
  });
});