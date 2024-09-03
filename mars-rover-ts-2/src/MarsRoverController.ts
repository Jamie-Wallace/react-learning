import { Position } from "./Position";
import { Coordinate } from "./Coordinate";
import { Compass } from "./Compass";

export class MarsRoverController {
  execute(currentPosition: Position, command: string) {
    let coordinate = new Coordinate(
      currentPosition.coordinate.xCoordinate,
      currentPosition.coordinate.yCoordinate
    );
    let compass = new Compass(currentPosition.compass.getCurrentDirection());

    Array.from(command).forEach((commandChar) => {
      if (this.isMoveCommand(commandChar)) {
        coordinate = new Position(coordinate, compass).move();
        return;
      }

      if (this.isTurnLeftCommand(commandChar)) {
        compass = Compass.turnLeft(compass);
        return;
      }

      if (this.isTurnRightCommand(commandChar)) {
        compass = Compass.turnRight(compass);
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
}
