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

      let newCompass = Compass.turnRight(compass);

      expect(newCompass.getCurrentDirection()).toBe(expectedDirection);
    }
  );

  it.each([
    ["N", "W"],
    ["W", "S"],
    ["S", "E"],
    ["E", "N"],
  ])(
    "when compass is facing %s, should turn left to face %s",
    (initialDirection, expectedDirection) => {
      let compass = new Compass(initialDirection);

      let newCompass = Compass.turnLeft(compass);

      expect(newCompass.getCurrentDirection()).toBe(expectedDirection);
    }
  );
});
