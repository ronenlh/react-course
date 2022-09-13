

import React from 'react';
import App, { sum, foo } from './App';

// test('renders learn react link', () => {
//   // ARRANGE
//   render(<App />);

//   // ACT
//   const linkElement = screen.getByText(/learn react/i);

//   // ASSERT
//   expect(linkElement).toBeInTheDocument();
// });


describe('learning tests', () => {
  it('tests 2+2', () => {
    // given
    // when
    const result = sum(2,2);
    // then
    expect(result).toBe(4)
  });

  it('tests 1+2', () => {
    // given
    // when
    const result = sum(2,1);
    // then
    expect(result).toBe(3)
  });

  it('tests 1+2', () => {
    // given
    // when
    const result = foo("hello world");
    // then
    expect(result).toMatchSnapshot();
  });
});
