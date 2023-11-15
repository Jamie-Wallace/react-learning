import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("has a Move button", () => {
    render(<App />);

    const moveButton = screen.getByRole("button", { name: "Move" });

    expect(moveButton).toBeInTheDocument();
  });
});
