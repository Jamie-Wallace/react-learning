
export class Position { 
    compass : string;
    positionX : number;
    positionY : number;

    constructor(compass: string, positionX: number, positionY: number){
        this.compass = compass;
        this.positionX = positionX;
        this.positionY = positionY;
    }

}