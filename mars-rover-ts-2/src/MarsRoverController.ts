import { Position } from "./Position";
import { Coordinate } from "./Coordinate";
import { Compass } from "./Compass";

export class MarsRoverController {
  execute(currentPosition: Position, command: string) {
    let coordinate = new Coordinate(
      currentPosition.coordinate.xCoordinate,
      currentPosition.coordinate.yCoordinate
    );
    const compass = new Compass(currentPosition.compass.currentDirection);

    Array.from(command).forEach((commandChar) => {
      if (this.isMoveCommand(commandChar)) {
        coordinate = this.move(new Position(coordinate, compass));
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

  move(currentPosition: Position): Coordinate {
    if (currentPosition.compass.isNorth()) {
      return Coordinate.moveNorth(currentPosition.coordinate);
    }

    if (currentPosition.compass.isEast()) {
      return Coordinate.moveEast(currentPosition.coordinate);
    }

    if (currentPosition.compass.isSouth()) {
      return Coordinate.moveSouth(currentPosition.coordinate);
    }

    return Coordinate.moveWest(currentPosition.coordinate);
  }
}
