import {expect, test } from "vitest";

class CustomerSelector {
    filter()  {
        return [];
    }
}

test('filter a list of customers', () => {
    // Given
    const customerSelector = new CustomerSelector();

    // Act
    const filteredCustomers = customerSelector.filter();

    // Assert
    expect(filteredCustomers.length).toBe(3)
})