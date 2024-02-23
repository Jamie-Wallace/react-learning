export class MarsRoverController {
  execute(command: string) {
    const directions = ["E", "S", "W", "N"];
    let directionIndex = -1;

    Array.from(command).forEach(commandChar => {
      if (commandChar === "L") {
        directionIndex -= 1;
      } else {
        directionIndex += 1;
      }
    });

    while (directionIndex < 0) {
      directionIndex += 4;
    }

    while (directionIndex > 3) {
      directionIndex -= 4;
    }

    return directions[directionIndex];
  }
}
