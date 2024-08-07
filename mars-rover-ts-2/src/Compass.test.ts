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

  //   it.each([
  //     ["L", "W"],
  //     ["LL", "S"],
  //     ["LLL", "E"],
  //     ["LLLL", "N"],
  //     ["LLLLL", "W"],
  //     ["LLLLLL", "S"],
  //     ["LLLLLLLLLL", "S"],
  //   ])(
  //     "when command is %s, should turn left to face %s",
  //     (command, expectedDirection) => {
  //       let controller = new MarsRoverController();

  //       let direction = controller.execute(startingPosition, command);

  //       expect(direction.compass.currentDirection).toBe(expectedDirection);
  //     }
  //   );
});
