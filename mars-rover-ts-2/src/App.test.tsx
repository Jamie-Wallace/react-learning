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
        clickButton(moveButton, clickCount);

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
        clickButton(rightButton, clickCount);

        const commandString = screen.getByLabelText("Command:");
        expect(commandString).toHaveValue(expectedCommand);
      });

  it.each([
    [1, "L"],
    [2, "LL"],
    [5, "LLLLL"]
  ])("Adds L to the command when we click Left",
      async (clickCount, expectedCommand) => {
        render(<App/>);

        const leftButton = screen.getByRole("button", { name: "Left" });
        clickButton(leftButton, clickCount);

        const commandString = screen.getByLabelText("Command:");
        expect(commandString).toHaveValue(expectedCommand);
      });

  function clickButton(button: HTMLElement, clickCount: Number) {
    for (let i = 0; i < clickCount; i++) {
      act(() => {
        userEvent.click(button);
      });
    }
  }
});
