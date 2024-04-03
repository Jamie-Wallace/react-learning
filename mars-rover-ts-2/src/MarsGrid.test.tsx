import { render, screen } from "@testing-library/react";
import MarsGrid from "./MarsGrid";

describe("MarsGrid should", () => {
  it.each([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [9, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [9, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
    [9, 2],
  ])("render a square in the expected coordinates", (xPosition, yPosition) => {
    render(<MarsGrid />);

    expect(
      screen.getByLabelText(`square at x${xPosition} y${yPosition}`)
    ).toBeVisible();
  });

  // render all squares

  // check squares display nothing
});
