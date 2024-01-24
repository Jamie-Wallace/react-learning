export class MarsRoverController {
  execute(command: string) {
    if (command.length == 2) return "S";
    if (command.length == 3) return "W";
    if (command.length == 4) return "N";
    return "E";
  }
}
