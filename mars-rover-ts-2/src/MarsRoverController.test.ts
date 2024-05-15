import { MarsRoverController } from "./MarsRoverController";

describe("MarsRoverController", () => {
  it.each([
    ["R", "E"],
    ["RR", "S"],
    ["RRR", "W"],
    ["RRRR", "N"],
    ["RRRRR", "E"],
    ["RRRRRR", "S"],
    ["RRRRRRRRRR", "S"],
  ])(
    "when command is %s, should turn left to face %s",
    (command, expectedDirection) => {
      let controller = new MarsRoverController();

      let direction = controller.execute(command);

      expect(direction).toBe(`0:0:${expectedDirection}`);
    }
  );

  it.each([
    ["L", "W"],
    ["LL", "S"],
    ["LLL", "E"],
    ["LLLL", "N"],
    ["LLLLL", "W"],
    ["LLLLLL", "S"],
    ["LLLLLLLLLL", "S"],
  ])(
    "when command is %s, should turn left to face %s",
    (command, expectedDirection) => {
      let controller = new MarsRoverController();

      let direction = controller.execute(command);

      expect(direction).toBe(`0:0:${expectedDirection}`);
    }
  );

  it.each([
    ["LR", "N"],
    ["LRR", "E"],
    ["LRRR", "S"],
    ["RL", "N"],
    ["RLLLRL", "S"],
  ])(
    "when command is %s, should turn to face %s",
    (command, expectedDirection) => {
      let controller = new MarsRoverController();

      let direction = controller.execute(command);

      expect(direction).toBe(`0:0:${expectedDirection}`);
    }
  );

  it.each([
    [0, "0"],
    [1, "1"],
    [2, "2"],
    [9, "9"],
    [10, "0"],
    [15, "5"],
  ])(
    "when moving forward %s times, y coordinate should be %s",
    (numberOfMoves, expectedCoordinate) => {
      let command = "";

      for (let i = 0; i < numberOfMoves; i++) {
        command += "M";
      }

      let controller = new MarsRoverController();

      let position = controller.execute(command);

      expect(position).toBe(`0:${expectedCoordinate}:N`);
    }
  );

  it.each([
    [0, "0"],
    [1, "9"],
    [2, "8"],
    [10, "0"],
    [11, "9"],
  ])(
    "when moving forward %s times after turning south, y coordinate should be %s",
    (numberOfMoves, expectedCoordinate) => {
      let command = "RR";

      for (let i = 0; i < numberOfMoves; i++) {
        command += "M";
      }

      let controller = new MarsRoverController();

      let position = controller.execute(command);

      expect(position).toBe(`0:${expectedCoordinate}:S`);
    }
  );

  it.each([
    [0, "0"],
    [1, "1"],
    [2, "2"],
    [9, "9"],
    [10, "0"],
    [15, "5"],
  ])(
    "when moving forward %s times after turning east, x coordinate should be %s",
    (numberOfMoves, expectedCoordinate) => {
      let command = "R";

      for (let i = 0; i < numberOfMoves; i++) {
        command += "M";
      }

      let controller = new MarsRoverController();

      let position = controller.execute(command);

      expect(position).toBe(`${expectedCoordinate}:0:E`);
    }
  );

  it.each([
    [0, "0"],
    [1, "9"],
    [2, "8"],
    [10, "0"],
    [11, "9"],
  ])(
    "when moving forward %s times after turning west, x coordinate should be %s",
    (numberOfMoves, expectedCoordinate) => {
      let command = "L";

      for (let i = 0; i < numberOfMoves; i++) {
        command += "M";
      }

      let controller = new MarsRoverController();

      let position = controller.execute(command);

      expect(position).toBe(`${expectedCoordinate}:0:W`);
    }
  );

  it.each([
    ["MLMMRMMRRM", "8:2:S"],
    ["LLMMRMMLLM", "9:8:E"],
    ["MMRMMMLMRMMM", "6:3:E"],
  ])(
    "when given command %s, should move to %s",
    (command, expectedPosition) => {
      let controller = new MarsRoverController();

      let direction = controller.execute(command);

      expect(direction).toBe(expectedPosition);
    }
  );

  it("when given an invalid command, should not move", () => {
    let controller = new MarsRoverController();

    let position = controller.execute("X");

    expect(position).toBe("0:0:N");
  });
});
