import { Compass } from "./Compass";
import { Coordinate } from "./Coordinate";

export class Position {
  coordinate: Coordinate;
  compass: Compass;

  constructor(coordinate: Coordinate, compass: Compass) {
    this.coordinate = coordinate;
    this.compass = compass;
  }
}
