export class MarsRoverController {
  private yPosition = 0;
  execute() {
    throw new Error("Not implemented!");
  }

  move() {
    this.yPosition += 1;
  }

  turnRight() {
    throw new Error("Not implemented!");
  }

  turnLeft() {
    throw new Error("Not implemented!");
  }

  getPosition() {
    return `0, ${this.yPosition}`;
  }
}
