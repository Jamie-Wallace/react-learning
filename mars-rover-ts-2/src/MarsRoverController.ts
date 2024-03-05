export class MarsRoverController {
  execute(command: string) {
    const directions = ["N", "E", "S", "W"];
    let directionIndex = 0;

    let yCoordinate = 0;

    Array.from(command).forEach((commandChar) => {
      if (commandChar === "M") {
        yCoordinate += 1;
      } else if (commandChar === "L") {
        directionIndex -= 1;
      } else {
        directionIndex += 1;
      }

      if (directionIndex < 0) {
        directionIndex = 3;
      } else if (directionIndex > 3) {
        directionIndex = 0;
      }
    });

    return `0:${yCoordinate}:${directions[directionIndex]}`;
  }
}
