export class Compass {
  directions = ["N", "E", "S", "W"];
  directionIndex = 0;

  turnLeft() {
    this.directionIndex -= 1;

    if (this.directionIndex < 0) {
      this.directionIndex = 3;
    }
  }

  turnRight() {
    this.directionIndex += 1;

    if (this.directionIndex > 3) {
      this.directionIndex = 0;
    }
  }

  isNorth() {
    return this.directionIndex === 0;
  }

  isEast() {
    return this.directionIndex === 1;
  }

  isSouth() {
    return this.directionIndex === 2;
  }

  isWest() {
    return this.directionIndex === 3;
  }

  getCurrentDirection() {
    return this.directions[this.directionIndex];
  }
}
