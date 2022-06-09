import { render, screen } from "@testing-library/react";
import AddUpdateBookLines from "./AddUpdateBookLines";

/**
 * Here is where we could isolate this component and test various functionality. Including dispatches and logic.
 */
test("Placeholder test", () => {
  render(<AddUpdateBookLines />);
  const addContact = screen.getByText("Add Contact");
  expect(addContact).toBeInTheDocument();
});
