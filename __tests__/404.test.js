import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Error from "../components/Error/Error";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("Error Page", () => {
  test("renders error component", () => {
    mockRouter.push("/404");
    render(<Error />);

    const backButtonElement = screen.getByText("404");
    expect(backButtonElement).toBeInTheDocument();
  });
});
