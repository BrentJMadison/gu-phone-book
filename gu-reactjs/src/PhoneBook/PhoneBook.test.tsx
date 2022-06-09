import { render, screen } from "@testing-library/react";
import PhoneBookForm from "./PhoneBook";

/**
 * Here is where we could isolate this component and test various functionality. Including dispatches and logic.
 */
test("Placeholder test", () => {
  render(<PhoneBookForm />);
  const addContact = screen.getByText("Add Contact");
  expect(addContact).toBeInTheDocument();
});
