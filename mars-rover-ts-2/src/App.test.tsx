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

  it("has a 'Turn right' button", () => {
    render(<App />);

    const rightButton = screen.getByRole("button", { name: "Right" });

    expect(rightButton).toBeInTheDocument();
  });
});
