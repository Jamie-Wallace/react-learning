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
  ])("Adds M to the command when we click Move",
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

  it.each([
    [1, "R"],
    [2, "RR"],
    [5, "RRRRR"]
  ])("Adds R to the command when we click Right",
      async (clickCount, expectedCommand) => {
        render(<App/>);

        const rightButton = screen.getByRole("button", { name: "Right" });
        for (let i = 0; i < clickCount; i++) {
          act(() => {
            userEvent.click(rightButton);
          });
        }

        const commandString = screen.getByLabelText("Command:");
        expect(commandString).toHaveValue(expectedCommand);
      });


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
