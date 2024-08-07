import { Compass } from "./Compass";

describe("Compass should", () => {
  it.each([
    ["N", "E"],
    ["E", "S"],
    ["S", "W"],
    ["W", "N"],
  ])(
    "when compass is facing %s, should turn right to face %s",
    (initialDirection, expectedDirection) => {
      let compass = new Compass(initialDirection);

      compass.turnRight();
      expect(compass.currentDirection).toBe(expectedDirection);
    }
  );

  it.each([
    ["N", "W"],
    ["W", "S"],
    ["S", "E"],
    ["E", "N"],
  ])(
    "when compass is facing %s, should turn right to face %s",
    (initialDirection, expectedDirection) => {
      let compass = new Compass(initialDirection);

      compass.turnLeft();
      expect(compass.currentDirection).toBe(expectedDirection);
    }
  );
});
