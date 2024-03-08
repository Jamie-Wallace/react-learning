export class MarsRoverController {
  directionIndex = 0;
  yCoordinate = 0;
  xCoordinate = 0;

  execute(command: string) {
    const directions = ["N", "E", "S", "W"];

    Array.from(command).forEach((commandChar) => {
      if (this.isMoveCommand(commandChar)) {
        this.move();
        return;
      }

      if (this.isTurnLeftCommand(commandChar)) {
        this.turnLeft();
        return;
      }

      if (this.isTurnRightCommand(commandChar)) {
        this.turnRight();
      }
    });

    return `${this.xCoordinate}:${this.yCoordinate}:${
      directions[this.directionIndex]
    }`;
  }

  private isMoveCommand(commandChar: string) {
    return commandChar === "M";
  }

  private isTurnRightCommand(commandChar: string) {
    return commandChar === "R";
  }

  private isTurnLeftCommand(commandChar: string) {
    return commandChar === "L";
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

    if (this.directionIndex === 0) {
      this.moveNorth();
      return;
    }

    if (this.directionIndex === 1) {
      this.moveEast();
      return;
    }

    if (this.directionIndex === 2) {
      this.moveSouth();
      return;
    }

    if (this.directionIndex === 3) {
      this.moveWest();
      return;
    }
  }

  private moveNorth() {
    this.yCoordinate += 1;

    if (this.yCoordinate > 9) {
      this.yCoordinate = 0;
    }
  }

  private moveEast() {
    this.xCoordinate += 1;

    if (this.xCoordinate > 9) {
      this.xCoordinate = 0;
    }
  }

  private moveSouth() {
    this.yCoordinate -= 1;

    if (this.yCoordinate < 0) {
      this.yCoordinate = 9;
    }
  }

  private moveWest() {
    this.xCoordinate -= 1;

    if (this.xCoordinate < 0) {
      this.xCoordinate = 9;
    }
  }
}
