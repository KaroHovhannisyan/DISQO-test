import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../common/components';

it('Should render button text and trigger onclick', () => {
  const onClick = jest.fn();  
  const button = render(<Button text="test" onClick={onClick} />);
  expect(screen.getByText('test')).toBeInTheDocument();
  button.findAllByRole("button")
  fireEvent(
    screen.getByText("test"),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  )
  expect(onClick).toBeCalledTimes(1);
});