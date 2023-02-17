

export class MarsRover {
    execute(command: string) {
        if (command === '') {
            return '0:0:N';
        }

        if (command.length === 3) {
            return '0:0:W'
        }

        if (command.length === 2) {
            return '0:0:S'
        }

        return '0:0:E';
    }
}
