import { render, screen, within } from "@testing-library/react";
import MarsGrid from "./MarsGrid";

describe("MarsGrid should", () => {
    it("Render a grid", () => {
        render(<MarsGrid />);

        expect(screen.getByLabelText("Mars rover grid")).toBeVisible();
    });

    it.each(
        [0, 1]
    )
    ('Render square inside grid at x coordinate %s', (xCoord: number) => {
        render(<MarsGrid />);

        const grid = screen.getByLabelText("Mars rover grid")
        expect(within(grid).getByLabelText(`square at x${xCoord} y0`)).toBeVisible();
    });

    // Render each square
    // Do we want to pass in size?
    // Do we want to render rover?
    // Do we want to test grid layout CSS?
});