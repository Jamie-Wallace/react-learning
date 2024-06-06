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

  it.each([
    [0, 0],
    [4, 0],
    [0, 7],
  ])("render the rover at the starting position", (xCoord, yCoord) => {
    let coordinate = new Coordinate();
    coordinate.xCoordinate = xCoord;
    coordinate.yCoordinate = yCoord;

    render(<MarsGrid position={new Position(coordinate, new Compass())} />);

    let square = screen.getByLabelText(`square at x${xCoord} y${yCoord}`);
    expect(square).toHaveTextContent("^");
  });

  it("render the rover facing east", () => {
    const compass = new Compass();
    compass.currentDirection = "E";

    render(<MarsGrid position={new Position(new Coordinate(), compass)} />);

    let square = screen.getByLabelText(`square at x0 y0`);
    expect(square).toHaveTextContent(">");
  });

  it("render the rover facing south", () => {
    const compass = new Compass();
    compass.currentDirection = "S";

    render(<MarsGrid position={new Position(new Coordinate(), compass)} />);

    let square = screen.getByLabelText(`square at x0 y0`);
    expect(square).toHaveTextContent("V");
  });

  it("render the rover facing west", () => {
    const compass = new Compass();
    compass.currentDirection = "W";

    render(<MarsGrid position={new Position(new Coordinate(), compass)} />);

    let square = screen.getByLabelText(`square at x0 y0`);
    expect(square).toHaveTextContent("<");
  });
});
