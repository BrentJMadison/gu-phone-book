import React from 'react';
import { render, screen } from '@testing-library/react';
import PhoneBookForm from './PhoneBook';

test('renders learn react link', () => {
  render(<PhoneBookForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
