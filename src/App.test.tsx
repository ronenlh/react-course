

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // ARRANGE
  render(<App />);

  // ACT
  const linkElement = screen.getByText(/learn react/i);

  // ASSERT
  expect(linkElement).toBeInTheDocument();
});

