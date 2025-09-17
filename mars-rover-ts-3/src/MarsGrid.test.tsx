import { render, screen } from "@testing-library/react";
import MarsGrid from "./MarsGrid";

describe("MarsGrid should", () => {
    it("Render a grid", () => {
        render(<MarsGrid />);

        expect(screen.getByLabelText("Mars rover grid")).toBeVisible();
    });

    // Render each square
    // Do we want to test grid layout CSS?
});