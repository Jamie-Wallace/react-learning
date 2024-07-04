import { Position } from "./Position";
import { Coordinate } from "./Coordinate";
import { Compass } from "./Compass";

export class MarsRoverController {
  execute(currentPosition: Position, command: string) {
    const coordinate = new Coordinate(currentPosition.coordinate.xCoordinate,
        currentPosition.coordinate.yCoordinate)
    const compass = new Compass(currentPosition.compass.currentDirection)

    Array.from(command).forEach((commandChar) => {
      if (this.isMoveCommand(commandChar)) {
        this.move(new Position(coordinate, compass));
        return;
      }

      if (this.isTurnLeftCommand(commandChar)) {
        compass.turnLeft();
        return;
      }

      if (this.isTurnRightCommand(commandChar)) {
        compass.turnRight();
      }
    });

    return new Position(coordinate, compass);
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

  move(currentPosition: Position) {
    if (currentPosition.compass.isNorth()) {
      currentPosition.coordinate.moveNorth();
      return;
    }

    if (currentPosition.compass.isEast()) {
      currentPosition.coordinate.moveEast();
      return;
    }

    if (currentPosition.compass.isSouth()) {
      currentPosition.coordinate.moveSouth();
      return;
    }

    if (currentPosition.compass.isWest()) {
      currentPosition.coordinate.moveWest();
      return;
    }
  }
}
