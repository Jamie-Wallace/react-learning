import { render, screen } from "@testing-library/react";
import MarsGrid from "./MarsGrid";

describe("MarsGrid should", () => {
  it.each([0, 1, 2])(
    "render a square at x0 in the expected y position",
    (yPosition) => {
      render(<MarsGrid />);

      expect(screen.getByLabelText(`square at x0 y${yPosition}`)).toBeVisible();
    }
  );

  // render all squares

  // check squares display nothing
});
