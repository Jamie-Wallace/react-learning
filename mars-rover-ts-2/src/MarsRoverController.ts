export class MarsRoverController {
  execute(command: string) {
    const directions = ["E", "S", "W", "N"];
    let directionIndex = 0;

    if (command[0] === "L") {
      directionIndex = 3 - command.length;
    } else {
      directionIndex = command.length - 1;
    }

    if (directionIndex < 0) {
      directionIndex += 4;
    }

    if (directionIndex > 3) {
      directionIndex = directionIndex % 4;
    }

    return directions[directionIndex];
  }
}
