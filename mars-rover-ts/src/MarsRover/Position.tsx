import { Coordinates } from "./Coordinates";

export class Position { 
    readonly compass : string;
    readonly coordinate : Coordinates;

    constructor(compass: string, coordinate: Coordinates){
        this.compass = compass;
        this.coordinate = coordinate;
    }
}