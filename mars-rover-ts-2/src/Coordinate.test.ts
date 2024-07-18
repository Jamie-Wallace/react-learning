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
    [new Coordinate(0, 9), new Coordinate(0, 8)],
    [new Coordinate(3, 2), new Coordinate(3, 1)],
    [new Coordinate(0, 0), new Coordinate(0, 9)]
  ])(
      "Move south to expected coordinate",
      (startingCoordinate, expectedCoordinate) => {
        const result = Coordinate.moveSouth(startingCoordinate);

        expect(result).toStrictEqual(expectedCoordinate);
      });
});
