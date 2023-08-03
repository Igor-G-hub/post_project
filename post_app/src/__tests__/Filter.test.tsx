import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter/Filter";
import { filteredlist } from "../testingMocks/testingMocks";

describe("Filter", () => {
  const renderComponent = () =>
    render(
      <Filter
        filteredPostList={filteredlist}
        postList={filteredlist}
        setFilteredPostList={() => null}
      />
    );

  test("renders Filter", () => {
    renderComponent();
    screen.getByRole("textbox");
  });

  test("calls onChange event handler changes filter array", () => {
    const setStateSpy = jest.fn();
    const { getByRole } = render(
      <Filter
        filteredPostList={filteredlist}
        postList={filteredlist}
        setFilteredPostList={setStateSpy}
      />
    );
    const input = getByRole("textbox");
    fireEvent.change(input, { event: { target: { value: "bret" } } });
    expect(setStateSpy).toHaveBeenCalledTimes(1);
  });
});
