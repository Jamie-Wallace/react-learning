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

    let square = screen.getByLabelText("square at x2 y6");
    expect(square).toHaveTextContent("");
  });

  it("render the rover at the starting position", () => {
    render(
      <MarsGrid position={new Position(new Coordinate(), new Compass())} />
    );

    let square = screen.getByLabelText("square at x0 y0");
    expect(square).toHaveTextContent("^");
  });

  it("render the rover at a different x position",
      () => {
        let coordinate = new Coordinate();
        coordinate.xCoordinate = 4;
        coordinate.yCoordinate = 0;

        render(
            <MarsGrid position={new Position(coordinate, new Compass())}/>
        );

        let square = screen.getByLabelText("square at x4 y0");
        expect(square).toHaveTextContent("^");
      });

  it("render the rover at a different y position",
      () => {
        let coordinate = new Coordinate();
        coordinate.xCoordinate = 0;
        coordinate.yCoordinate = 7;

        render(
            <MarsGrid position={new Position(coordinate, new Compass())}/>
        );

        let square = screen.getByLabelText("square at x0 y7");
        expect(square).toHaveTextContent("^");
      });

  // Test directions.
});
