export class MarsRoverController {

  execute(command: string) {
    if (command === "L") {
      return "W";
    } else if (command === "LL") {
      return "S";
    } else if (command === "LLL") {
      return "E";
    }
  }
}
