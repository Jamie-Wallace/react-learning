import { Compass } from "./Compass";

class Position {
  yCoordinate = 0;
  xCoordinate = 0;
}

export class MarsRoverController {
  position = new Position();
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

    return `${this.position.xCoordinate}:${
      this.position.yCoordinate
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
    this.position.yCoordinate += 1;

    if (this.position.yCoordinate > 9) {
      this.position.yCoordinate = 0;
    }
  }

  private moveEast() {
    this.position.xCoordinate += 1;

    if (this.position.xCoordinate > 9) {
      this.position.xCoordinate = 0;
    }
  }

  private moveSouth() {
    this.position.yCoordinate -= 1;

    if (this.position.yCoordinate < 0) {
      this.position.yCoordinate = 9;
    }
  }

  private moveWest() {
    this.position.xCoordinate -= 1;

    if (this.position.xCoordinate < 0) {
      this.position.xCoordinate = 9;
    }
  }
}
