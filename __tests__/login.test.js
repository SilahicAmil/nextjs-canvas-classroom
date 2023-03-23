import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Login from "../components/Login/Login";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("Login Page", () => {
  mockRouter.push("/login");
  test("renders login form", () => {
    render(<Login />);

    const loginFormElement = screen.getByTestId("form-element");
    expect(loginFormElement).toBeInTheDocument();
  });

  test("render sign in button", () => {
    render(<Login />);

    const loginButton = screen.getByRole("button", {
      name: "Sign In",
      exact: false,
    });
    expect(loginButton).toBeInTheDocument();
  });
});
