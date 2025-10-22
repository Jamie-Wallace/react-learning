import { render, screen, within } from "@testing-library/react";
import MarsGrid from "./MarsGrid";

describe("MarsGrid should", () => {
    it("Render a grid", () => {
        render(<MarsGrid />);

        expect(screen.getByLabelText("Mars rover grid")).toBeVisible();
    });

    it.each(
        [[0, 0], [0, 1], [2, 0], [9, 9]]
    )
    ('Render square inside grid at coordinates %s,%s', (xCoord: number, yCoord: number) => {
        render(<MarsGrid />);

        const grid = screen.getByLabelText("Mars rover grid")
        expect(within(grid).getByLabelText(`square at x${xCoord} y${yCoord}`)).toBeVisible();
    });

    // Do we want to render rover?
    // Do we want to test grid layout CSS?
});