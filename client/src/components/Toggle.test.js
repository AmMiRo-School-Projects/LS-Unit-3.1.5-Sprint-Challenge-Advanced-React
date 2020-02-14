import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Toggle from "./Toggle";

test("button is clickable", () => {
  const { getByTestId } = render(<Toggle />);
  const button = getByTestId(/button/i);

  fireEvent.click(button);
});
