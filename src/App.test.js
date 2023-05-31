import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Testing 
test('ToDo', () => {
  const { getByText, getByLabelText } = render(<App/>);

  // Check for elements we expect to see
  getByText('Flow App');
});
