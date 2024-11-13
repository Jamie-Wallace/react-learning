import {Customer} from "./customer.ts";
import haversine from "haversine";

export class CustomerSelector {
    selectCustomers(inputCustomers: Customer[], distance: number): Customer[] {
        const start = {
            latitude: 53.3381985,
            longitude: -6.2592576
        }

        console.log(haversine({latitude: inputCustomers[0].location.latitude, longitude: inputCustomers[0].location.longitude}, start))
        return inputCustomers.filter(customer => haversine({latitude: customer.location.latitude, longitude: customer.location.longitude}, start) <= distance);
    }
}