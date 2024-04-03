import { render, screen } from "@testing-library/react";
import MarsGrid from "./MarsGrid";

describe("MarsGrid should", () => {
  it.each([0, 1, 2, 3, 9])(
    "render a square at x0 in the expected y position",
    (yPosition) => {
      render(<MarsGrid />);

      expect(screen.getByLabelText(`square at x0 y${yPosition}`)).toBeVisible();
    }
  );

  it.each([1, 2])(
    "render a square in y0 at the expected x position",
    (xPosition) => {
      render(<MarsGrid />);

      expect(screen.getByLabelText(`square at x${xPosition} y0`)).toBeVisible();
    }
  );

  // render all squares

  // check squares display nothing
});
