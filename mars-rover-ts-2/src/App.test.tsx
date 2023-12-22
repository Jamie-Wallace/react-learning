import { act, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

jest.mock("./MarsRoverController");

describe("App", () => {
  it("Starts with an empty command list", () => {
    render(<App/>);

    const commandString = screen.getByLabelText("Command:");

    expect(commandString).toHaveValue("");
    expect(commandString).toBeDisabled();
  });

  it.each([
    [1, "M"],
    [2, "MM"],
    [5, "MMMMM"]
  ])("Adds M to the move command when we click Move",
      async (clickCount, expectedCommand) => {
        render(<App/>);

        const moveButton = screen.getByRole("button", { name: "Move" });
        for (let i = 0; i < clickCount; i++) {
          act(() => {
            userEvent.click(moveButton);
          });
        }

        const commandString = screen.getByLabelText("Command:");
        expect(commandString).toHaveValue(expectedCommand);
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
