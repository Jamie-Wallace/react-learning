export class MarsRoverController {
  execute(command: string) {
    if (command === "L") {
      return "W";
    }
    if (command === "LLL") {
      return "E";
    }

    const directions = ["E", "S", "W", "N"];
    let directionIndex = command.length - 1;
    if (directionIndex > 3) {
      directionIndex = directionIndex % 4;
    }
    return directions[directionIndex];
  }
}
