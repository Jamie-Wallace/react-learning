import { render, screen } from "@testing-library/react";
import MarsGrid from "./MarsGrid";

describe("MarsGrid should", () => {
  it.each([0, 1, 2, 3, 9])(
    "render squares with the expected y coordinate",
    (yPosition) => {
      render(<MarsGrid />);

      expect(screen.getByLabelText(`square at x0 y${yPosition}`)).toBeVisible();
      expect(screen.getByLabelText(`square at x9 y${yPosition}`)).toBeVisible();
    }
  );

  it("render an empty square", () => {
    render(<MarsGrid />);

    let square = screen.getByLabelText("square at x0 y0");
    expect(square).toHaveTextContent("");
  });

  it("render the rover at the starting position", () => {
    render(<MarsGrid />);

    let square = screen.getByLabelText("square at x0 y0");
    expect(square).toHaveTextContent("^");
  });


  // Test directions.
});
