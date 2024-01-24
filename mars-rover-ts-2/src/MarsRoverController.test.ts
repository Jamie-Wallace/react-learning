import { MarsRoverController } from "./MarsRoverController";

describe("MarsRoverController", () => {
  it('should turn right once', () => {
    let controller = new MarsRoverController();

    let direction = controller.execute("R");

    expect(direction).toBe("E");
  });

  it('should turn right twice', () => {
    let controller = new MarsRoverController();

    let direction = controller.execute("RR");

    expect(direction).toBe("S");
  });

  it('should turn right thrice', () => {
    let controller = new MarsRoverController();

    let direction = controller.execute("RRR");

    expect(direction).toBe("W");
  });

  /*TODO Next steps
  Consider clearing text after executing
  Move into MarsRoverController and start testing the Execute method
  

  */
});
