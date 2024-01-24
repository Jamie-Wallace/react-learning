export class MarsRoverController {
  execute(command: string) {
    const directions = ["E", "S", "W", "N"];

    return directions[command.length - 1];
  }
}
