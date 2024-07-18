import { Coordinate } from "./Coordinate";
import { start } from "repl";

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
