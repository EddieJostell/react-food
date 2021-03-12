import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Modal from '../../components/Modal/Modal';

afterEach(() => {
  cleanup();
});
const toggle = () => {};

test('renders Modal component', () => {
  render(<Modal toggle={toggle} />);
  const ModalElement = screen.getByTestId('modal');
  expect(ModalElement).not.toBe(undefined);
});

test('Modal has a toggle button', () => {
  render(<Modal toggle={toggle} />);
  const toggleBtn = screen.getByRole('button', { name: /ok I got it!/i });
  expect(toggleBtn).toBeInTheDocument();
});

test('toggle button has been clicked', () => {
  const onClick = jest.fn();
  render(<Modal toggle={onClick} />);
  const toggleBtn = screen.getByRole('button', { name: /ok I got it!/i });
  fireEvent.click(toggleBtn);
  expect(onClick).toHaveBeenCalled();
});
