export class MarsRoverController {
    execute(command: string) {
        let directions = ["N", "W", "S", "E"];
        let directionIndex = 0

        for (const char of command) {
            if (char == "R") {
                directionIndex--;
                if (directionIndex < 0) {
                    directionIndex = directions.length - 1;
                }
            } else if (char == "L") {
                directionIndex++;
                directionIndex = directionIndex % 4;
            } else {
                throw new Error("Unrecognised command");
            }
        }

        return directions[directionIndex];
    }
}
