import {expect, test} from "vitest";
import {CustomerSelector} from "./customer-selector.ts";
import {Customer} from "./customer.ts";

test('returns unfiltered list of customers', () => {
    const inputCustomers: Customer[] = [
        new Customer(),
        new Customer(),
        new Customer()];

    const customerSelector = new CustomerSelector();

    const selectedCustomers = customerSelector.selectCustomers(inputCustomers);

    expect(selectedCustomers).toEqual(inputCustomers);
})