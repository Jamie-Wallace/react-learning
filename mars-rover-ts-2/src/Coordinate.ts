export class Coordinate {
  readonly gridHeight = 9;
  readonly gridWidth = 9;

  public yCoordinate;
  public xCoordinate;

  constructor(xCoordinate: number = 0, yCoordinate: number = 0) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }

  static moveNorth(coordinate: Coordinate): Coordinate {
    let yCoordinate = coordinate.yCoordinate + 1;

    if (yCoordinate > coordinate.gridHeight) {
      yCoordinate = 0;
    }
    return new Coordinate(coordinate.xCoordinate, yCoordinate);
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

  static moveSouth(coordinate: Coordinate) : Coordinate {
    let yCoordinate = coordinate.yCoordinate - 1;

    if (yCoordinate < 0) {
      yCoordinate = coordinate.gridHeight;
    }

    return new Coordinate(0, yCoordinate)
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
