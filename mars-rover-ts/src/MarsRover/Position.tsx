
export class Position { 
    readonly compass : string;
    readonly positionX : number;
    readonly positionY : number;

    constructor(compass: string, positionX: number, positionY: number){
        this.compass = compass;
        this.positionX = positionX;
        this.positionY = positionY;
    }

}