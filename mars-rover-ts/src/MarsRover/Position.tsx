import { Coordinates } from "./Coordinates";
import { Direction } from "./Direction";

export class Position { 
    readonly compass : Direction;
    readonly coordinate : Coordinates;

    constructor(compass: Direction, coordinate: Coordinates){
        this.compass = compass;
        this.coordinate = coordinate;
    }
}