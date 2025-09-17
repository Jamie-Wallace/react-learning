import { render, screen, within } from "@testing-library/react";
import MarsGrid from "./MarsGrid";

describe("MarsGrid should", () => {
    it("Render a grid", () => {
        render(<MarsGrid />);

        expect(screen.getByLabelText("Mars rover grid")).toBeVisible();
    });

    it('Render square 0,0 inside grid', () => {
        render(<MarsGrid />);

        const grid = screen.getByLabelText("Mars rover grid")
        expect(within(grid).getByLabelText("square at x0 y0")).toBeVisible();
    });

    // Render each square
    // Do we want to render rover?
    // Do we want to test grid layout CSS?
});