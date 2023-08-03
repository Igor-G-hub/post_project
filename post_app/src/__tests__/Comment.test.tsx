import React from "react";
import { render, screen } from "@testing-library/react";
import Comment from "../components/Comment/Comment";
import { comment } from "../testingMocks/testingMocks";

describe("Post", () => {
  const renderComponent = () => render(<Comment data={comment} />);

  test("renders Posts props", () => {
    renderComponent();
    expect(
      screen.getByText(/id labore ex et quam laborum/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Eliseo@gardner.biz/i)).toBeInTheDocument();
    expect(
      screen.getByText(/laudantium enim quasi est quidem magnam voluptate/i)
    ).toBeInTheDocument();
  });
});
