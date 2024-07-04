import { Compass } from "./Compass";
import { Coordinate } from "./Coordinate";
import { Position } from "./Position";

export class MarsRoverController {
  coordinate = new Coordinate();
  compass = new Compass();

  execute(currentPosition: Position, command: string) {
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

    return new Position(this.coordinate, this.compass);
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
      this.coordinate.moveNorth();
      return;
    }

    if (this.compass.isEast()) {
      this.coordinate.moveEast();
      return;
    }

    if (this.compass.isSouth()) {
      this.coordinate.moveSouth();
      return;
    }

    if (this.compass.isWest()) {
      this.coordinate.moveWest();
      return;
    }
  }
}
