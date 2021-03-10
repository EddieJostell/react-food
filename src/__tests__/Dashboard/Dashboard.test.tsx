import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Dashboard from '../../components/Dashboard/Dashboard';
const howto = () => {};
const recipe = () => {};
const type = () => {};
const takeout = () => {};
const fastfood = false;

test('renders Dashboard component', () => {
  render(
    <Dashboard
      howto={howto}
      fastfood={fastfood}
      recipe={recipe}
      type={type}
      takeout={takeout}
    />
  );
  const DashboardElement = screen.getByTestId('dashboard');
  expect(DashboardElement).not.toBe(undefined);
});

test('dashboard has a "how to" button', () => {
  const howToMocked = jest.fn();
  render(
    <Dashboard
      howto={howToMocked}
      fastfood={fastfood}
      recipe={recipe}
      type={type}
      takeout={takeout}
    />
  );
  const howtoBtn = screen.getByRole('button', { name: /hur gör man?/i });
  expect(howtoBtn).not.toBe(undefined);
  fireEvent.click(howtoBtn);
  expect(howToMocked).toHaveBeenCalledTimes(1);
});

test('dashboard has a "Shuffle" button', () => {
  const shuffleMocked = jest.fn();
  render(
    <Dashboard
      howto={howto}
      recipe={shuffleMocked}
      fastfood={fastfood}
      type={type}
      takeout={takeout}
    />
  );
  const shuffleBtn = screen.getByRole('button', { name: /blanda/i });
  expect(shuffleBtn).not.toBe(undefined);
  fireEvent.click(shuffleBtn);
  expect(shuffleMocked).toHaveBeenCalledTimes(1);
});

test('dashboard has a "Vegetarian" checkbox', () => {
  const veggoMocked = jest.fn();
  render(
    <Dashboard
      howto={howto}
      recipe={recipe}
      fastfood={fastfood}
      type={veggoMocked}
      takeout={takeout}
    />
  );
  const veggoCheckbox = screen.getByRole('checkbox', { name: /vegetarian?/i });
  expect(veggoCheckbox).not.toBe(undefined);
  fireEvent.click(veggoCheckbox);
  expect(veggoMocked).toHaveBeenCalledTimes(1);
});

test.only('dashboard has a "Vegetarian" checkbox', () => {
  const lazyMocked = jest.fn();
  render(
    <Dashboard
      howto={howto}
      recipe={recipe}
      fastfood={fastfood}
      type={type}
      takeout={lazyMocked}
    />
  );
  screen.debug();
  const lazyCheckbox = screen.getByRole('checkbox', { name: /vegetarian?/i });
  expect(lazyCheckbox).not.toBe(undefined);
  fireEvent.click(lazyCheckbox);
  expect(lazyMocked).toHaveBeenCalledTimes(1);
});
