import { Compass } from './Compass';
import { Coordinates } from './Coordinates';
import { Position } from './Position';

export class MarsRover {
    compass: Compass = new Compass();
    coordinate: Coordinates = new Coordinates(0, 0)

    execute(command: string) {
        Array.from(command).forEach(character => {
            if (this.commandIsTurnLeft(character)) {
                this.compass.turnLeft();       
            }
            if (this.commandIsTurnRight(character)) {
                this.compass.turnRight();    
            }

            if (this.commandIsMove(character)) {
                this.coordinate.move(this.compass.getDirection());
            }
        });

        return new Position(this.compass.getDirection(), new Coordinates(this.coordinate.positionX, this.coordinate.positionY));
    }

    private commandIsMove(character: string): boolean {
        return character === 'M';
    }

    private commandIsTurnLeft(commandCharacter: string): boolean {
        return commandCharacter === 'L';
    }

    private commandIsTurnRight(commandCharacter: string): boolean {
        return commandCharacter === 'R';
    }
}
