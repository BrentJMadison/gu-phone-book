import React from "react";
import { render, screen } from "@testing-library/react";
import PhoneBookLinesList from "./PhoneBookLinesList";

test("renders learn react link", () => {
  render(<PhoneBookLinesList lines={[]} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
