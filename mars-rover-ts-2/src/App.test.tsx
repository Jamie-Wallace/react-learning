import { act, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { MarsRoverController } from "./MarsRoverController";

jest.mock("./MarsRoverController");

describe("App", () => {
  it("Starts with an empty command list", () => {
    render(<App />);

    const commandString = screen.getByLabelText("Command:");

    expect(commandString).toHaveValue("");
    expect(commandString).toBeDisabled();
  });

  it.each([
    [1, "M"],
    [2, "MM"],
    [5, "MMMMM"],
  ])(
    "Adds M to the command when we click Move",
    async (clickCount, expectedCommand) => {
      render(<App />);

      const moveButton = screen.getByRole("button", { name: "Move" });
      clickButton(moveButton, clickCount);

      assertCommandIs(expectedCommand);
    }
  );

  it.each([
    [1, "R"],
    [2, "RR"],
    [5, "RRRRR"],
  ])(
    "Adds R to the command when we click Right",
    async (clickCount, expectedCommand) => {
      render(<App />);

      const rightButton = screen.getByRole("button", { name: "Right" });
      clickButton(rightButton, clickCount);

      assertCommandIs(expectedCommand);
    }
  );

  it.each([
    [1, "L"],
    [2, "LL"],
    [5, "LLLLL"],
  ])(
    "Adds L to the command when we click Left",
    async (clickCount, expectedCommand) => {
      render(<App />);

      const leftButton = screen.getByRole("button", { name: "Left" });
      clickButton(leftButton, clickCount);

      assertCommandIs(expectedCommand);
    }
  );

  it("has an execute button", () => {
    render(<App />);

    const executeButton = screen.getByRole("button", { name: "Execute" });

    expect(executeButton).toBeInTheDocument();
  });

  it("sends an empty execute command to the controller", () => {
    const executeFunction = jest.fn();
    MarsRoverController.prototype.execute = executeFunction;

    render(<App />);

    const executeButton = screen.getByRole("button", { name: "Execute" });
    userEvent.click(executeButton);

    expect(executeFunction).toHaveBeenCalledTimes(1);
    expect(executeFunction).toHaveBeenCalledWith("");
  });

  it("sends execute command of M to the controller", () => {
    const executeFunction = jest.fn();
    MarsRoverController.prototype.execute = executeFunction;

    render(<App />);

    const moveButton = screen.getByRole("button", { name: "Move" });
    act(() => {
      userEvent.click(moveButton);
    });

    const executeButton = screen.getByRole("button", { name: "Execute" });
    userEvent.click(executeButton);

    expect(executeFunction).toHaveBeenCalledTimes(1);
    expect(executeFunction).toHaveBeenCalledWith("M");
  });

  function clickButton(button: HTMLElement, clickCount: number) {
    for (let i = 0; i < clickCount; i++) {
      act(() => {
        userEvent.click(button);
      });
    }
  }

  function assertCommandIs(expectedCommand: string) {
    const commandString = screen.getByLabelText("Command:");
    expect(commandString).toHaveValue(expectedCommand);
  }
});
