import { Coordinate } from "./Coordinate";

describe("Coordinate should", () => {
  it.each([
    [0, 1],
    [1, 2],
    [9, 0],
  ])(
    "Move north to expected coordinate",
    (startingCoordinate, expectedCoordinate) => {
      const coordinate = new Coordinate(0, startingCoordinate);

      const result = Coordinate.moveNorth(coordinate);

      expect(result.getCurrentCoordinate()).toBe(`0:${expectedCoordinate}`);
    }
  );

  it("Move south from 0", () => {
    const coordinate = new Coordinate(0, 0);

    const result = Coordinate.moveNorth(coordinate);

    expect(result.getCurrentCoordinate()).toBe("0:9");
  });
});
