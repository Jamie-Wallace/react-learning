import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { MarsRoverController } from "./MarsRoverController";

jest.mock("./MarsRoverController");

describe("App", () => {
  it("moves the rover when we click Move", () => {
    const moveFunction = jest.fn();
    MarsRoverController.prototype.move = moveFunction;

    render(<App />);

    const moveButton = screen.getByRole("button", { name: "Move" });
    userEvent.click(moveButton);

    expect(moveFunction).toHaveBeenCalled();
  });

  it("turns the rover right when we click Right", () => {
    const turnRightFunction = jest.fn();
    MarsRoverController.prototype.turnRight = turnRightFunction;

    render(<App />);

    const turnRightButton = screen.getByRole("button", { name: "Right" });
    userEvent.click(turnRightButton);

    expect(turnRightFunction).toHaveBeenCalled();
  });

  it("has a turn left button", () => {
    render(<App />);

    const turnLeftButton = screen.getByRole("button", { name: "Left" });

    expect(turnLeftButton).toBeInTheDocument();
  });

  it("turns the rover left when we click Left", () => {
    const turnLeftFunction = jest.fn();
    MarsRoverController.prototype.turnLeft = turnLeftFunction;

    render(<App />);

    const turnLeftButton = screen.getByRole("button", { name: "Left" });
    userEvent.click(turnLeftButton);

    expect(turnLeftFunction).toHaveBeenCalled();
  });
});
