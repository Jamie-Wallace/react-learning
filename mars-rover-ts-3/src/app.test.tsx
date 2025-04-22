import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App should", () => {
  it("Start with an empty command list", () => {
    render(<App />);

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
      render(<App />);

      clickLeftButton(clickCount);

      assertCommandIs(expectedCommand);
    }
  );
});

function clickLeftButton(clickCount: number = 1) {
  const button = screen.getByRole("button", { name: "Left" });
  clickButton(button, clickCount);
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
