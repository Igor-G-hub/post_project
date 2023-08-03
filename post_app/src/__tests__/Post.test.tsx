import React from "react";
import { render, screen } from "@testing-library/react";
import Post from "../components/Post/Post";
import { postObject } from "../testingMocks/testingMocks";
import { BrowserRouter as Router } from "react-router-dom";

describe("Post", () => {
  const renderComponent = () =>
    render(
      <Router>
        <Post data={postObject} />
      </Router>
    );

  test("renders Posts props", () => {
    renderComponent();
    expect(screen.getByText(/Hayden@althea.biz/i)).toBeInTheDocument();
    expect(
      screen.getByText(/id labore ex et quam laborum/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/laudantium enim quasi est quidem magnam voluptate/i)
    ).toBeInTheDocument();
  });
});
