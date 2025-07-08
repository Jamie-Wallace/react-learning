export class MarsRoverController {

  execute(command: string) {
    const turnCount = command.length;
    const directions = ["", "W", "S", "E"];
    return directions[turnCount];
  }
}
