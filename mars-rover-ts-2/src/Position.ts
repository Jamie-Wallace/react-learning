import { Compass } from "./Compass";
import { Coordinate } from "./Coordinate";

export class Position {
  coordinate: Coordinate;
  compass: Compass;

  constructor(coordinate: Coordinate, compass: Compass) {
    this.coordinate = coordinate;
    this.compass = compass;
  }

  move(): Coordinate {
    if (this.compass.isNorth()) {
      return Coordinate.moveNorth(this.coordinate);
    }

    if (this.compass.isEast()) {
      return Coordinate.moveEast(this.coordinate);
    }

    if (this.compass.isSouth()) {
      return Coordinate.moveSouth(this.coordinate);
    }

    return Coordinate.moveWest(this.coordinate);
  }

  toString() {
    return `${this.coordinate.xCoordinate}:${this.coordinate.yCoordinate}:${this.compass.currentDirection}`;
  }
}
