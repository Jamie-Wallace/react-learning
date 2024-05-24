import { render, screen } from "@testing-library/react";
import MarsGrid from "./MarsGrid";
import { Position } from "./Position";
import { Coordinate } from "./Coordinate";
import { Compass } from "./Compass";

describe("MarsGrid should", () => {
  it.each([0, 1, 2, 3, 9])(
    "render squares with the expected y coordinate",
    (yPosition) => {
      render(
        <MarsGrid position={new Position(new Coordinate(), new Compass())} />
      );

      expect(screen.getByLabelText(`square at x0 y${yPosition}`)).toBeVisible();
      expect(screen.getByLabelText(`square at x9 y${yPosition}`)).toBeVisible();
    }
  );

  it("render an empty square", () => {
    render(
      <MarsGrid position={new Position(new Coordinate(), new Compass())} />
    );

    let square = screen.getByLabelText("square at x0 y0");
    expect(square).toHaveTextContent("");
  });

  it.skip("render the rover at the starting position", () => {
    render(
      <MarsGrid position={new Position(new Coordinate(), new Compass())} />
    );

    let square = screen.getByLabelText("square at x0 y0");
    expect(square).toHaveTextContent("^");
  });

  // Test directions.
});
