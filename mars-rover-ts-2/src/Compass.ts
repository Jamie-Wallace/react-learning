export class Compass {
  public currentDirection;

  constructor(direction: string = "N") {
    this.currentDirection = direction;
  }

  getCurrentDirection() {
    return this.currentDirection;
  }

  turnLeft() {
    if (this.isNorth()) {
      this.currentDirection = "W";
      return;
    }

    if (this.isWest()) {
      this.currentDirection = "S";
      return;
    }

    if (this.isSouth()) {
      this.currentDirection = "E";
      return;
    }

    if (this.isEast()) {
      this.currentDirection = "N";
      return;
    }
  }

  static turnLeft(compass: Compass) : Compass {
    return new Compass("W");
    // if (this.isNorth()) {
    //   this.currentDirection = "W";
    //   return;
    // }

    // if (this.isWest()) {
    //   this.currentDirection = "S";
    //   return;
    // }

    // if (this.isSouth()) {
    //   this.currentDirection = "E";
    //   return;
    // }

    // if (this.isEast()) {
    //   this.currentDirection = "N";
    //   return;
    // }
  }

  turnRight() {
    if (this.isNorth()) {
      this.currentDirection = "E";
      return;
    }

    if (this.isEast()) {
      this.currentDirection = "S";
      return;
    }

    if (this.isSouth()) {
      this.currentDirection = "W";
      return;
    }

    if (this.isWest()) {
      this.currentDirection = "N";
      return;
    }
  }

  isNorth() {
    return this.currentDirection === "N";
  }

  isEast() {
    return this.currentDirection === "E";
  }

  isSouth() {
    return this.currentDirection === "S";
  }

  isWest() {
    return this.currentDirection === "W";
  }
}
