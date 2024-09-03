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
    if (compass.isNorth()) {
      return new Compass("W");
    }

    if (compass.isWest()) {
      return new Compass("S");
    }

    if (compass.isSouth()) {
      return new Compass("E");
    }

    return new Compass("N");
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

  static turnRight(compass: Compass) : Compass {
    if (compass.isNorth()) {
      return new Compass("E");
    }

    if (compass.isEast()) {
      return new Compass("S");
    }

    if (compass.isSouth()) {
      return new Compass("W");
    }

    return new Compass("N");
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
