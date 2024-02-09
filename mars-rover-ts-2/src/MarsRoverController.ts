export class MarsRoverController {
  execute(command: string) {
    const directions = ["E", "S", "W", "N"];
    let directionIndex = 0;

    if (command[0] === "L") {
      directionIndex = 3 - command.length;
    } else {
      directionIndex = command.length - 1;
    }

    while (directionIndex < 0) {
      directionIndex += 4;
    }

    while (directionIndex > 3) {
      directionIndex -= 4;
    }

    return directions[directionIndex];
  }
}
