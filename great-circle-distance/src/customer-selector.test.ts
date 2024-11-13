import {expect, test} from "vitest";
import {CustomerSelector} from "./customer-selector.ts";

test('returns unfiltered list of customers', () => {
    const inputCustomers = [1, 2, 3];

    const customerSelector = new CustomerSelector();

    const selectedCustomers = customerSelector.selectCustomers(inputCustomers);

    expect(selectedCustomers).toEqual(inputCustomers);
})