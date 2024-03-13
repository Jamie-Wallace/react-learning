import { Compass } from "./Compass";
import { Position } from "./Position";

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
      this.position.moveNorth();
      return;
    }

    if (this.compass.isEast()) {
      this.position.moveEast();
      return;
    }

    if (this.compass.isSouth()) {
      this.position.moveSouth();
      return;
    }

    if (this.compass.isWest()) {
      this.position.moveWest();
      return;
    }
  }
}
