import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Signup from "../components/Signup/Signup";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("Signup Page", () => {
  mockRouter.push("/signup");
  test("renders sign up form", () => {
    render(<Signup />);

    const signUpFormElement = screen.getByTestId("form-element");

    expect(signUpFormElement).toBeInTheDocument();
  });

  test("renders create account button", () => {
    render(<Signup />);

    const createAccountButton = screen.getByTestId("create-account");
    expect(createAccountButton).toBeInTheDocument();
  });
});
