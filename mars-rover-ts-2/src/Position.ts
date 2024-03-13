export class Position {
  yCoordinate = 0;
  xCoordinate = 0;

  moveNorth() {
    this.yCoordinate += 1;

    if (this.yCoordinate > 9) {
      this.yCoordinate = 0;
    }
  }

  moveEast() {
    this.xCoordinate += 1;

    if (this.xCoordinate > 9) {
      this.xCoordinate = 0;
    }
  }

  moveSouth() {
    this.yCoordinate -= 1;

    if (this.yCoordinate < 0) {
      this.yCoordinate = 9;
    }
  }

  moveWest() {
    this.xCoordinate -= 1;

    if (this.xCoordinate < 0) {
      this.xCoordinate = 9;
    }
  }
}
