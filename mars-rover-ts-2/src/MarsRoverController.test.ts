import { MarsRoverController } from "./MarsRoverController";

describe("MarsRoverController", () => {
  it('should start at position', () => {
    let controller = new MarsRoverController();

    expect(controller.getPosition()).toBe("0, 0");
  });

  it('should move', () => {
    let controller = new MarsRoverController();
    // TODO: UP TO HERE:
    // Change to execute("M") - so is in line with kata.
    controller.move();

    expect(controller.getPosition()).toBe("0, 1");
  });

  it('should move twice', () => {
    let controller = new MarsRoverController();
    controller.move();
    controller.move();

    expect(controller.getPosition()).toBe("0, 2");
  });
});