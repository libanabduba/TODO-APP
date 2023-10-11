import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for better assertions
import InputBar from "./InputBar";
import { Provider } from "react-redux";
import store from "../redux/store";
import "@testing-library/jest-dom";

describe("InputBar", () => {
  it("should update input value", () => {
    render(
      <Provider store={store}>
        <InputBar />
      </Provider>,
    );

    const inputElement = screen.getByTestId("inputBar");
    // type in the input element
    inputElement.value = "test input";

    // check if the value is updated
    expect(inputElement.value).toBe("test input");
  });
  it("should add a new task and update the store", () => {
    render(
      <Provider store={store}>
        <InputBar />
      </Provider>,
    );

    const inputElement = screen.getByTestId("inputBar");
    // type in the input element
    inputElement.value = "test input";

    // check the store if the last task is the same as the input value
  });
});
