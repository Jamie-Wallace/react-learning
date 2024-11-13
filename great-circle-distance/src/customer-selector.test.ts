import {expect, test} from "vitest";
import {CustomerSelector} from "./customer-selector.ts";
import {Customer} from "./customer.ts";

test('returns unfiltered list of customers', () => {
    const inputCustomers: Customer[] = [
        new Customer(),
        new Customer(),
        new Customer()];

    const customerSelector = new CustomerSelector();

    const selectedCustomers = customerSelector.selectCustomers(inputCustomers, 0);

    expect(selectedCustomers).toEqual(inputCustomers);
});

test('selects one customer', () => {
    let customer1 = new Customer(-6.2592576, 53.3381985);

    const inputCustomers: Customer[] = [
        customer1];

    const customerSelector = new CustomerSelector();

    const selectedCustomers = customerSelector.selectCustomers(inputCustomers, 100);

    const expectedCustomers = [customer1];
    expect(selectedCustomers).toEqual(expectedCustomers);
});