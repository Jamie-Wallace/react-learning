import { Coordinate } from "./Coordinate";

describe("Coordinate should", () => {
  it("Move north", () => {
    const coordinate = new Coordinate(0, 0);

    const result = Coordinate.moveNorth(coordinate);

    expect(result.getCurrentCoordinate()).toBe("0:1");
  });
});
