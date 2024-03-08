export class MarsRoverController {
  directionIndex = 0;
  yCoordinate = 0;
  xCoordinate = 0;

  execute(command: string) {
    const directions = ["N", "E", "S", "W"];

    Array.from(command).forEach((commandChar) => {
      if (commandChar === "M") {
        this.move();

        return;
      }

      if (commandChar === "L") {
        this.turnLeft();

        return;
      }

      if (commandChar === "R") {
        this.turnRight();
      }
    });

    return `${this.xCoordinate}:${this.yCoordinate}:${
      directions[this.directionIndex]
    }`;
  }

  turnLeft() {
    this.directionIndex -= 1;

    if (this.directionIndex < 0) {
      this.directionIndex = 3;
    }
  }

  turnRight() {
    this.directionIndex += 1;

    if (this.directionIndex > 3) {
      this.directionIndex = 0;
    }
  }

  move() {
    if (this.directionIndex === 1) {
      this.xCoordinate += 1;

      if (this.xCoordinate > 9) {
        this.xCoordinate = 0;
      }
      return;
    }

    if (this.directionIndex === 2) {
      this.yCoordinate -= 1;

      if (this.yCoordinate < 0) {
        this.yCoordinate = 9;
      }

      return;
    }

    if (this.directionIndex === 3) {
      this.xCoordinate -= 1;

      if (this.xCoordinate < 0) {
        this.xCoordinate = 9;
      }
      return;
    }

    this.yCoordinate += 1;

    if (this.yCoordinate > 9) {
      this.yCoordinate = 0;
    }
  }
}
