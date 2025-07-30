export class MarsRoverController {
    execute(command: string) {
        const directions = ["N", "W", "S", "E"];

        for (const char of command) {
            if (char !== "L" && char !== "R") {
                throw new Error("Unrecognised command");
            }
        }

        if(command == "LR"){
          return directions[0];
        }

        if (command.includes("L")) {
            const turnCount = command.length % 4;
            return directions[turnCount];
        }

        if (command.includes("R")) {
            const turnCount = command.length % 4;
            return directions[(4 - turnCount) % 4];
        }
    }
}
