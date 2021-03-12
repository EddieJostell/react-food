import React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import Dashboard from '../../components/Dashboard/Dashboard';
import App from '../../../src/App';

const howto = () => {};
const recipe = () => {};
const type = () => {};
const takeout = () => {};
let fastfood = false;

afterEach(() => {
  cleanup();
});

test('Renders Dashboard component', () => {
  render(
    <Dashboard
      howto={howto}
      fastfood={false}
      recipe={recipe}
      type={type}
      takeout={takeout}
    />
  );
  const DashboardElement = screen.getByTestId('dashboard');
  expect(DashboardElement).not.toBe(undefined);
});

test('Dashboard has a "How to" button', () => {
  const onClick = jest.fn();
  render(
    <Dashboard
      howto={onClick}
      fastfood={false}
      recipe={recipe}
      type={type}
      takeout={takeout}
    />
  );
  const howtoBtn = screen.getByRole('button', { name: /hur gör man?/i });
  expect(howtoBtn).not.toBe(undefined);
  fireEvent.click(howtoBtn);
  expect(onClick).toHaveBeenCalled();
});

test('Dashboard has a "Shuffle" button', () => {
  const onClick = jest.fn();
  render(
    <Dashboard
      howto={howto}
      recipe={onClick}
      fastfood={false}
      type={type}
      takeout={takeout}
    />
  );
  const shuffleBtn = screen.getByRole('button', { name: /blanda/i });
  expect(shuffleBtn).not.toBe(undefined);
  fireEvent.click(shuffleBtn);
  expect(onClick).toHaveBeenCalled();
});

test('Dashboard has a "Vegetarian" checkbox', () => {
  const onClick = jest.fn();
  render(
    <Dashboard
      howto={howto}
      recipe={recipe}
      fastfood={false}
      type={onClick}
      takeout={takeout}
    />
  );
  const veggoCheckbox = screen.getByRole('checkbox', { name: /vegetarian?/i });
  expect(veggoCheckbox).not.toBe(undefined);
  fireEvent.click(veggoCheckbox);
  expect(onClick).toHaveBeenCalled();
});

test('Dashboard has a "Lazy" checkbox', () => {
  const onClick = jest.fn();
  render(
    <Dashboard
      howto={howto}
      recipe={recipe}
      fastfood={false}
      type={type}
      takeout={onClick}
    />
  );
  const lazyCheckbox = screen.getByRole('checkbox', { name: /för lat?/i });
  expect(lazyCheckbox).not.toBe(undefined);
  fireEvent.click(lazyCheckbox);
  expect(onClick).toHaveBeenCalled();
});

test('Lazy button is pressed - hide Vegetarian button', () => {
  const onClick = jest.fn();
  const { rerender } = render(
    <Dashboard
      howto={howto}
      recipe={recipe}
      fastfood={false}
      type={type}
      takeout={onClick}
    />
  );
  const takeout = screen.getByRole('checkbox', { name: /för lat?/i });
  const veggo = screen.getByRole('checkbox', { name: /vegetarian?/i });
  expect(takeout).toBeInTheDocument();
  expect(veggo).toBeInTheDocument();
  fireEvent.click(takeout);
  expect(onClick).toHaveBeenCalled();
  rerender(
    <Dashboard
      howto={howto}
      recipe={recipe}
      fastfood={true}
      type={type}
      takeout={onClick}
    />
  );
  expect(veggo).not.toBeInTheDocument();
});

test('Howto button is pressed - Modal component is shown', () => {
  render(<App />);
  let btn = screen.getByText('Hur gör man?');
  fireEvent.click(btn);
  let modal = screen.getByTestId('modal');
  expect(modal).not.toBe(undefined);
});

test('Lazy button is pressed - takeaway component is shown', () => {
  render(<App />);
  let btn = screen.getByText('För lat?');
  fireEvent.click(btn);
  let takeaway = screen.getByTestId('takeaway');
  expect(takeaway).not.toBe(undefined);
});
