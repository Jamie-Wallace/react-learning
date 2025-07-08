export class MarsRoverController {

  execute(command: string) {
    const directions = ["N", "W", "S", "E"];

    
    const turnCount = command.length % 4;
    

    return directions[turnCount];
  }
}
