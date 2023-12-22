import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

jest.mock("./MarsRoverController");

describe("App", () => {
  it("Starts with an empty command list", () => {
    render(<App />);

    const commandString = screen.getByLabelText("Command:");

    expect(commandString).toHaveValue("");
    expect(commandString).toBeDisabled();
  });

  it("Adds M to the move command when we click Move", async () => {
    render(<App />);

    const moveButton = screen.getByRole("button", { name: "Move" });
    userEvent.click(moveButton);

    const commandString = screen.getByLabelText("Command:");
    expect(commandString).toHaveValue("M");
  });

  // it("turns the rover right when we click Right", () => {
  //   const turnRightFunction = jest.fn();
  //   MarsRoverController.prototype.turnRight = turnRightFunction;

  //   render(<App />);

  //   const turnRightButton = screen.getByRole("button", { name: "Right" });
  //   userEvent.click(turnRightButton);

  //   expect(turnRightFunction).toHaveBeenCalled();
  // });

  // it("turns the rover left when we click Left", () => {
  //   const turnLeftFunction = jest.fn();
  //   MarsRoverController.prototype.turnLeft = turnLeftFunction;

  //   render(<App />);

  //   //TODO Duplicated `GetByRole("button", "name");
  //   const turnLeftButton = screen.getByRole("button", { name: "Left" });
  //   userEvent.click(turnLeftButton);

  //   expect(turnLeftFunction).toHaveBeenCalled();
  // });
});
