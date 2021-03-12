import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../../App';
import Banner from '../../components/Banner/Banner';
import Food from '../../components/Food/Food';
import Container from '../../components/Container/Container';
import Takeaway from '../../components/Takeaway/Takeaway';

afterEach(() => {
  cleanup();
});

const mockFood = { dish: 'Köttbullar', veggo: false, link: 'https' };
const mockCompany = { name: 'Foodora', link: 'https' };
const containerChildren = '<div>HEJ</div>';

test('renders App component', () => {
  render(<App />);
  screen.debug();
  const AppElement = screen.getByTestId('application');
  expect(AppElement).not.toBe(undefined);
});

test('renders Container component', () => {
  render(<Container children={containerChildren} />);
  const ContainerElement = screen.getByTestId('container');
  expect(ContainerElement).not.toBe(undefined);
});

test('renders Banner component', () => {
  render(<Banner />);
  const BannerElement = screen.getByTestId('banner');
  const BannerContent = screen.getByText('Men va fan har du ingen fantasi?');
  expect(BannerElement).not.toBe(undefined);
  expect(BannerContent).toBeInTheDocument();
});

test('renders Food component', () => {
  render(<Food food={mockFood} />);
  const FoodElement = screen.getByTestId('food');
  const foodText = screen.getByText('Köttbullar');
  expect(FoodElement).not.toBe(undefined);
  expect(foodText).toBeInTheDocument();
});

test('renders Takeaway component', () => {
  render(<Takeaway company={mockCompany} />);
  const CompElement = screen.getByTestId('takeaway');
  const compText = screen.getByText('Foodora');
  expect(CompElement).not.toBe(undefined);
  expect(compText).toBeInTheDocument();
});

//https://github.com/testing-library/react-testing-library/issues/479#issuecomment-529548194
