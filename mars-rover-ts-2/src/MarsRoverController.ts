export class MarsRoverController {
  private position = "0, 0";

  move() {
    this.position = "0, 1";
  }

  turnRight() {
    throw new Error("Not implemented!");
  }

  turnLeft() {
    throw new Error("Not implemented!");
  }

  getPosition() {
    return this.position;
  }
}
