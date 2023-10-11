import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for better assertions
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "@testing-library/jest-dom";

describe("App component", () => {
  it("should mark a task as completed", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const firstTask = screen.getAllByTestId("taskItem")[0];
    const firstTaskCheckbox = firstTask.querySelector(
      "svg[data-testid='test-task-item-not-completed']",
    );
    firstTaskCheckbox.click();

    expect(firstTask.querySelector("form")).toHaveClass("opacity-60");
  });
  it("should add a task", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const tasksListLength = screen.getAllByTestId("taskItem").length;
    const inputElement = screen.getByTestId("inputBar");
    // type in the input element
    inputElement.value = "test task";

    const submitButton = screen.getByTestId("submitButton");
    // click the submit button
    submitButton.click();

    const newTasksListLength = screen.getAllByTestId("taskItem").length;

    expect(newTasksListLength).toBe(tasksListLength + 1);
  });
});
