import { render, screen } from "@testing-library/react";
import App from "./App";

describe("mars rover feature", () => {
    it("moves and turns", () => {
        render(<App />);

        let moveButton = screen.getByRole("button", {name: "Move"});
        let turnRightButton = screen.getByRole("button", {name: "Right"});
        let turnLeftButton = screen.getByRole("button", {name: "Left"});
        
        // Move and turn a few times.

        // Move forwards    0,1
        // Move forwards    0,2
        // Turn right       0,2
        // Move forwards    1,2
        // Turn left        1,2
        // Move forwards    1,3
        // 1,3 ^

        // Assert on the position.

        const squareAt1_3 = screen.getByLabelText("square at x1 y3");

        expect(squareAt1_3).toHaveTextContent("^");
    });
});