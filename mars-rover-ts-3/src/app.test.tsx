import { fireEvent, render, screen } from "@testing-library/react";
import MarsRoverApplication from "./MarsRoverApplication.tsx";
import { MarsRoverController } from "./MarsRoverController";
import { vi } from "vitest";
import Mock = jest.Mock;

vi.mock("./MarsRoverController");

let executeFunction: Mock<any, any>;

describe("App should", () => {
  beforeEach(() => {
    executeFunction = vi.fn();
    MarsRoverController.prototype.execute = executeFunction;
  });

  it("Start with an empty command list", () => {
    render(<MarsRoverApplication />);

    const commandString = screen.getByLabelText("Command:");

    expect(commandString).toHaveValue("");
    expect(commandString).toBeDisabled();
  });

  it.each([
    [1, "L"],
    [2, "LL"],
    [5, "LLLLL"],
  ])(
    "Adds L to the command when we click Left",
    async (clickCount, expectedCommand) => {
      render(<MarsRoverApplication />);

      clickLeftButton(clickCount);

      assertCommandIs(expectedCommand);
    }
  );

  it("sends an empty execute command to the controller", () => {
    render(<MarsRoverApplication />);

    clickExecuteButton();

    expect(executeFunction).toHaveBeenCalledTimes(1);

    expect(executeFunction).toHaveBeenCalledWith("");
  });

  it("sends execute command of M to the controller", () => {
    render(<MarsRoverApplication />);

    clickLeftButton();

    clickExecuteButton();

    expect(executeFunction).toHaveBeenCalledTimes(1);
    expect(executeFunction).toHaveBeenCalledWith("L");
  });
});

function clickLeftButton(clickCount: number = 1) {
  const button = screen.getByRole("button", { name: "Left" });
  clickButton(button, clickCount);
}

function clickExecuteButton() {
  const button = screen.getByRole("button", { name: "Execute" });
  clickButton(button, 1);
}

function clickButton(button: HTMLElement, clickCount: number = 1) {
  for (let i = 0; i < clickCount; i++) {
    fireEvent.click(button);
  }
}

function assertCommandIs(expectedCommand: string) {
  const commandString = screen.getByLabelText("Command:");
  expect(commandString).toHaveValue(expectedCommand);
}
