export class Coordinates {
    positionX : number;
    positionY : number;

    constructor(positionX: number, positionY: number){
        this.positionX = positionX;
        this.positionY = positionY;
    }

    moveXForwards() {
        this.positionX++;

        if (this.positionX > 2) {
            this.positionX = 0;
        }
        return this.positionX;
    }

    moveXBackwards() {
        this.positionX--;

        if (this.positionX < 0) {
            this.positionX = 2;
        }
        return this.positionX;
    }

    moveYForwards() {
        this.positionY++;

        if (this.positionY > 2) {
            this.positionY = 0;
        }
        return this.positionY;
    }

    moveYBackwards() {
        this.positionY--;

        if (this.positionY < 0) {
            this.positionY = 2;
        }
        return this.positionY;
    }
}