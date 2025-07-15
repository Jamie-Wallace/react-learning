export class MarsRoverController {

  execute(command: string) {
    const directions = ["N", "W", "S", "E"];

    if (!command.includes("L")) {
      throw new Error("Unrecognised command");
    }

    const turnCount = command.length % 4;
    
    return directions[turnCount];
  }
}
