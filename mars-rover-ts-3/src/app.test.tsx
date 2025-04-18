import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { it, describe, expect } from "vitest";

describe("mars rover feature", () => {
    it("moves and turns", async () => {
        render(<App />);

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