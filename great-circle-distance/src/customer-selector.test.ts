import {expect, test} from "vitest";
import {CustomerSelector} from "./customer-selector.ts";
import {Customer} from "./customer.ts";
import {Coordinate} from "./coordinate.ts";

test('selects one customer', () => {
    let customer1 = new Customer(new Coordinate(53.3381985, -6.2592576));

    const inputCustomers: Customer[] = [
        customer1];

    const customerSelector = new CustomerSelector();

    const selectedCustomers = customerSelector.selectCustomers(inputCustomers, 100);

    const expectedCustomers = [customer1];
    expect(selectedCustomers).toEqual(expectedCustomers);
});