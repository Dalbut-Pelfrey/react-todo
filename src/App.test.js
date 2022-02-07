import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('shows hello world', () => {
  const { getByText } = render(<App />);
  const helloWorld = getByText(/hello/i);
  expect(helloWorld).toBeInTheDocument();
});