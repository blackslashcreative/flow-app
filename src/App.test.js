import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

// Testing 
test('ToDo', () => {
  const { getByText, getByLabelText } = render(<App/>);

  // Check for elements we expect to see
  getByText('Flow App');
});

test('add items to list', () => {
  const { getByText, getByRole } = render(<App/>);

  const input = document.getElementById("add-todo");
  userEvent.type(input, "learn spanish");
  fireEvent.submit(input); // userEvent.click(buton);
  getByText('learn spanish');
});