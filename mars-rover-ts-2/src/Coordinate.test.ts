import { Coordinate } from "./Coordinate";

describe("Coordinate should", () => {
  it.each([
    [new Coordinate(0, 0), new Coordinate(0, 1)],
    [new Coordinate(5, 1), new Coordinate(5, 2)],
    [new Coordinate(0, 9), new Coordinate(0, 0)]
  ])(
      "Move north to expected coordinate",
      (startingCoordinate, expectedCoordinate) => {
        const result = Coordinate.moveNorth(startingCoordinate);

        expect(result).toStrictEqual(expectedCoordinate);
      }
  );

  it.each([
    [0, 9],
    [1, 0],
    [9, 8]
  ])("Move south to expected coordinate",
      (startingCoordinate, expectedCoordinate) => {
        const coordinate = new Coordinate(0, startingCoordinate);

        const result = Coordinate.moveSouth(coordinate);

        expect(result.getCurrentCoordinate()).toBe(`0:${expectedCoordinate}`);
      });
});
