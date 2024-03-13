class Compass {
  directions = ["N", "E", "S", "W"];
  directionIndex = 0;

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

  directionIsNorth() {
    return this.directionIndex === 0;
  }

  directionIsEast() {
    return this.directionIndex === 1;
  }

  directionIsSouth() {
    return this.directionIndex === 2;
  }

  directionIsWest() {
    return this.directionIndex === 3;
  }
}

export class MarsRoverController {
  yCoordinate = 0;
  xCoordinate = 0;
  compass = new Compass();

  execute(command: string) {
    Array.from(command).forEach((commandChar) => {
      if (this.isMoveCommand(commandChar)) {
        this.move();
        return;
      }

      if (this.isTurnLeftCommand(commandChar)) {
        this.compass.turnLeft();
        return;
      }

      if (this.isTurnRightCommand(commandChar)) {
        this.compass.turnRight();
      }
    });

    return `${this.xCoordinate}:${this.yCoordinate}:${
      this.compass.directions[this.compass.directionIndex]
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

  move() {
    if (this.compass.directionIsNorth()) {
      this.moveNorth();
      return;
    }

    if (this.compass.directionIsEast()) {
      this.moveEast();
      return;
    }

    if (this.compass.directionIsSouth()) {
      this.moveSouth();
      return;
    }

    if (this.compass.directionIsWest()) {
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
