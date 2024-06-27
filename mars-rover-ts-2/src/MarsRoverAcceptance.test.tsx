import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("mars rover feature", () => {
  it("moves and turns", async () => {
    render(<App />);

    const moveButton = screen.getByRole("button", { name: "Move" });
    const turnRightButton = screen.getByRole("button", { name: "Right" });
    const turnLeftButton = screen.getByRole("button", { name: "Left" });

    // Move forwards    0,1
    await userEvent.click(moveButton);
    // Move forwards    0,2
    await userEvent.click(moveButton);
    // Turn right       0,2
    await userEvent.click(turnRightButton);
    // Move forwards    1,2
    await userEvent.click(moveButton);
    // Turn left        1,2
    await userEvent.click(turnLeftButton);
    // Move forwards    1,3
    await userEvent.click(moveButton);

    // 1,3 ^
    const executeButton = screen.getByRole("button", { name: "Execute" });

    await userEvent.click(executeButton);

    // Assert on the position.
    await waitFor(() => {
      const squareAt1_3 = screen.getByLabelText("square at x1 y3");

      expect(squareAt1_3).toHaveTextContent("^");
    });
  });
});
