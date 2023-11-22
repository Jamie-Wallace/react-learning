export class MarsRoverController {
  private position = "0, 0";
  private yPosition = 0;

  move() {
    this.yPosition+=1;
    this.position = "0, 1";
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
