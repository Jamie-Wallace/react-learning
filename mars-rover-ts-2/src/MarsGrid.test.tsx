import { render, screen } from "@testing-library/react";
import MarsGrid from "./MarsGrid";

describe("MarsGrid should", () => {
  it("render a square at x0 y0", () => {
    render(<MarsGrid />);

    expect(screen.getByLabelText("square at x0 y0")).toBeVisible();
  });
});
