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
      }
  );

  it.each([
    [new Coordinate(0, 0), new Coordinate(1, 0)],
    [new Coordinate(7, 2), new Coordinate(8, 2)],
    [new Coordinate(9, 0), new Coordinate(0, 0)]
  ])(
      "Move east to expected coordinate",
      (startingCoordinate, expectedCoordinate) => {
        const result = Coordinate.moveEast(startingCoordinate);

        expect(result).toStrictEqual(expectedCoordinate);
      }
  );

  it.each([
    [new Coordinate(9, 0), new Coordinate(8, 0)],
    [new Coordinate(7, 6), new Coordinate(6, 6)],
    [new Coordinate(0, 0), new Coordinate(9, 0)]
  ])(
      "Move west to expected coordinate",
      (startingCoordinate, expectedCoordinate) => {
        const result = Coordinate.moveWest(startingCoordinate);

        expect(result).toStrictEqual(expectedCoordinate);
      }
  );
});
