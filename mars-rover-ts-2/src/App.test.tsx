import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { MarsRoverController } from "./MarsRoverController";

jest.mock("./MarsRoverController");

describe("App", () => {
  it("has a Move button", () => {
    render(<App />);

    const moveButton = screen.getByRole("button", { name: "Move" });

    expect(moveButton).toBeInTheDocument();
  });

  it("moves the rover when we click Move", () => {
    const moveFunction = jest.fn();
    MarsRoverController.prototype.Move = moveFunction;

    render(<App />);

    const moveButton = screen.getByRole("button", { name: "Move" });
    userEvent.click(moveButton);

    expect(moveFunction).toHaveBeenCalled();
  });
});
