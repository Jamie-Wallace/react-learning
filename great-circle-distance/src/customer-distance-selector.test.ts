import {expect, test} from "vitest";
import {CustomerSelector} from "./customer-selector.ts";

test('filter a list of customers', () => {
    const customerSelector = new CustomerSelector();

    const filteredCustomers = customerSelector.filter();

    expect(filteredCustomers.length).toBe(3);
})