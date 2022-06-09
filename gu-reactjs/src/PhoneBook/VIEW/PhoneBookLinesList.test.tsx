import { render, screen } from "@testing-library/react";
import PhoneBookLinesList from "./PhoneBookLinesList";

/**
 * Here is where we could isolate this component and test various functionality. Including dispatches and logic.
 */
test("Placeholder test", () => {
  render(<PhoneBookLinesList lines={[]} />);

  const addContact = screen.getByText("Add Contact");
  expect(addContact).toBeInTheDocument();
});
