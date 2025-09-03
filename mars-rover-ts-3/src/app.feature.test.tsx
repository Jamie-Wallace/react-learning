import { render, screen, waitFor } from "@testing-library/react";
import MarsRoverApplication from "./MarsRoverApplication.tsx";
import userEvent from "@testing-library/user-event";

describe.skip("mars rover feature", () => {
  it("starts at home on the grid", async() => {
    await waitFor(() => {

      // TODO: need to assert in a way that forces a grid to be created.
      // i.e. check that it has 100 squares.
      // we could assert that squares at specific indexes in the array have expected labels.

      const squareAt0_0 = screen.getByLabelText("square at x0 y0");

      expect(squareAt0_0).toHaveTextContent("^");
    });
  });

  it("moves and turns", async () => {
    render(<MarsRoverApplication />);

    const moveButton = screen.getByRole("button", { name: "Move" });
    const turnRightButton = screen.getByRole("button", { name: "Right" });
    const turnLeftButton = screen.getByRole("button", { name: "Left" });

    // Turn right       0,0
    await userEvent.click(turnRightButton);
    // Move forwards    1,0
    await userEvent.click(moveButton);
    // Turn right       1,0
    await userEvent.click(turnRightButton);
    // Move forwards    1,9
    await userEvent.click(moveButton);
    // Move forwards    1,8
    await userEvent.click(moveButton);
    // Turn left        1,8
    await userEvent.click(turnLeftButton);
    // Move forwards    2,8
    await userEvent.click(moveButton);

    // 2,8 >
    const executeButton = screen.getByRole("button", { name: "Execute" });

    await userEvent.click(executeButton);

    // Assert on the position.
    await waitFor(() => {
      const squareAt2_8 = screen.getByLabelText("square at x2 y8");

      expect(squareAt2_8).toHaveTextContent(">");
    });

    expect(screen.getByLabelText("Command:")).toHaveValue("");
  });
});

describe.skip("turning feature", () => {
  it("turns", async () => {
    render(<MarsRoverApplication />);

    const turnLeftButton = screen.getByRole("button", { name: "Left" });
    const executeButton = screen.getByRole("button", { name: "Execute" });

    await userEvent.click(turnLeftButton);
    await userEvent.click(turnLeftButton);
    await userEvent.click(executeButton);

    const turnRightButton = screen.getByRole("button", { name: "Right" });

    await userEvent.click(turnRightButton);
    await userEvent.click(executeButton);

    await waitFor(() => {
      const squareAt0_0 = screen.getByLabelText("square at x0 y0");

      expect(squareAt0_0).toHaveTextContent("<");
    });

    expect(screen.getByLabelText("Command:")).toHaveValue("");
  });
});
