import { Compass } from "./Compass";

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

    return `${this.xCoordinate}:${
      this.yCoordinate
    }:${this.compass.getCurrentDirection()}`;
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
    if (this.compass.isNorth()) {
      this.moveNorth();
      return;
    }

    if (this.compass.isEast()) {
      this.moveEast();
      return;
    }

    if (this.compass.isSouth()) {
      this.moveSouth();
      return;
    }

    if (this.compass.isWest()) {
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
