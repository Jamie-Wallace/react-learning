export class MarsRoverController {
  execute(command: string) {
    const directions = ["N", "E", "S", "W"];
    let directionIndex = 0;

    let yCoordinate = 0;
    let xCoordinate = 0;

    Array.from(command).forEach((commandChar) => {
      if (commandChar === "M") {
        if (directionIndex === 1) {
          xCoordinate += 1;
        } else if (directionIndex === 2) {
          yCoordinate -= 1;

          if (yCoordinate < 0) {
            yCoordinate = 9;
          }
        } else {
          yCoordinate += 1;

          if (yCoordinate > 9) {
            yCoordinate = 0;
          }
        }

        return;
      }

      if (commandChar === "L") {
        directionIndex -= 1;

        if (directionIndex < 0) {
          directionIndex = 3;
        }

        return;
      }

      if (commandChar === "R") {
        directionIndex += 1;

        if (directionIndex > 3) {
          directionIndex = 0;
        }
      }
    });

    return `${xCoordinate}:${yCoordinate}:${directions[directionIndex]}`;
  }
}
