import React from "react";
import { render, screen } from "@testing-library/react";
import PostList from "../pages/PostList/PostList";

describe("PostList", () => {
  const renderComponent = () => render(<PostList />);

  test("renders child input component", () => {
    renderComponent();
    screen.getByRole("textbox");
  });
});
