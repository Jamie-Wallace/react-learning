import { Compass } from "./Compass";

export class Coordinate {
  readonly gridHeight = 9;
  readonly gridWidth = 9;

  public yCoordinate = 0;
  public xCoordinate = 0;

  constructor(xCoordinate: number, yCoordinate: number) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }

  moveNorth() {
    this.yCoordinate += 1;

    if (this.yCoordinate > this.gridHeight) {
      this.yCoordinate = 0;
    }
  }

  moveEast() {
    this.xCoordinate += 1;

    if (this.xCoordinate > this.gridWidth) {
      this.xCoordinate = 0;
    }
  }

  moveSouth() {
    this.yCoordinate -= 1;

    if (this.yCoordinate < 0) {
      this.yCoordinate = this.gridHeight;
    }
  }

  moveWest() {
    this.xCoordinate -= 1;

    if (this.xCoordinate < 0) {
      this.xCoordinate = this.gridWidth;
    }
  }

  getCurrentCoordinate() {
    return `${this.xCoordinate}:${this.yCoordinate}`;
  }
}
