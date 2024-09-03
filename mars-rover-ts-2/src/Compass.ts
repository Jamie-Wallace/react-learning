export class Compass {
  public readonly currentDirection;

  constructor(direction: string = "N") {
    this.currentDirection = direction;
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
