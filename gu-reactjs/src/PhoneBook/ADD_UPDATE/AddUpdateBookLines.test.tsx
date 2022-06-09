import React from "react";
import { render, screen } from "@testing-library/react";
import AddUpdateBookLines from "./AddUpdateBookLines";

test("renders learn react link", () => {
  render(<AddUpdateBookLines />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
