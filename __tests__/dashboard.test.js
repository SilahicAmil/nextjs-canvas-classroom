import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Dashboard from "../components/Dashboard/Dashboard";
import { useSession } from "next-auth/react";

jest.mock("next-auth/react");

describe("Dashboard Page", () => {
  window.fetch = jest.fn();
  test("Loads Dashboard Page Component", async () => {
    useSession.mockReturnValue({
      data: {
        user: {
          name: "teacher",
          email: "a@a.com",
        },
      },
    });

    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          courseId: 1,
          courseName: "test",
          description: "test",
          tag: "test",
          courseLink: "test",
        },
      ],
    });
    const courseData = [
      {
        courseId: 1,
      },
    ];

    render(<Dashboard courseData={courseData} />);
    const dashboardItems = await screen.findByTestId("dashboard-cards");

    expect(dashboardItems).toBeInTheDocument();
  });
});
