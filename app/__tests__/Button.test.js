import React from 'react';
import { render } from 'react-testing-library';
import Button from '../components/Button';

it('it works', () => {
  const { container } = render(<Button />);
  expect(container.firstChild).toMatchSnapshot();
});
