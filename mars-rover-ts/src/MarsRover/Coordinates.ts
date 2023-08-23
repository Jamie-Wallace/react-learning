import { Direction } from "./Direction";

export class Coordinates {
    positionX : number;
    positionY : number;

    constructor(positionX: number, positionY: number){
        this.positionX = positionX;
        this.positionY = positionY;
    }

    move(direction: Direction){
        if (direction === Direction.East) {
            this.moveXForwards();
        }
        else if (direction === Direction.South) {
            this.moveYBackwards();
        }
        else if (direction === Direction.West) {
            this.moveXBackwards();
        }
        else if (direction === Direction.North) {
            this.moveYForwards();
        }
    }

    moveXForwards() {
        this.positionX++;

        if (this.positionX > 9) {
            this.positionX = 0;
        }
        return this.positionX;
    }

    moveXBackwards() {
        this.positionX--;

        if (this.positionX < 0) {
            this.positionX = 9;
        }
        return this.positionX;
    }

    moveYForwards() {
        this.positionY++;

        if (this.positionY > 9) {
            this.positionY = 0;
        }
        return this.positionY;
    }

    moveYBackwards() {
        this.positionY--;

        if (this.positionY < 0) {
            this.positionY = 9;
        }
        return this.positionY;
    }
}