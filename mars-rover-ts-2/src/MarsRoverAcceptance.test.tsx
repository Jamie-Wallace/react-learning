import { render, screen } from "@testing-library/react";
import App from "./App";

describe("mars rover feature", () => {
    it("moves and turns", () => {
        render(<App />);

        let moveButton = screen.getByRole("button", {name: "Move"});

        // Move and turn a few times.
        // Assert on the position.
    });
});