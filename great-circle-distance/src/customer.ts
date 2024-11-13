export class Customer {
    _longitude: number;
    _latitude: number;

    constructor(longitude: number = 0, latitude: number = 0) {
        this._longitude = longitude;
        this._latitude = latitude;
    }
}