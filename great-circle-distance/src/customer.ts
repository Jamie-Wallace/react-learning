import {Coordinate} from "./coordinate.ts";

export class Customer {
    public location: Coordinate;

    constructor(location: Coordinate) {
        this.location = location;
    }
}