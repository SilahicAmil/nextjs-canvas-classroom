import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Landing from "../components/LandingPage/Landing";

describe("Landing Page", () => {
  test("Loads Landing Page Components", () => {
    render(<Landing />);

    const buttonElement = screen.getByRole("link", {
      name: "Log In" || "Get Started Today",
      exact: false,
    });

    expect(buttonElement).toBeInTheDocument();
  });
});
