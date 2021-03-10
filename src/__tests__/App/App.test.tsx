import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import Banner from '../../components/Banner/Banner';
import Food from '../../components/Food/Food';
import Container from '../../components/Container/Container';
const mockFood = { dish: 'Köttbullar', veggo: false, link: 'https' };
const containerChildren = '<div>HEJ</div>';

test('renders App component', () => {
  render(<App />);
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
  //const { debug } = render(<Food food={mockFood} />);
  //debug();
  render(<Food food={mockFood} />);
  const FoodElement = screen.getByTestId('food');
  const foodText = screen.getByText('Köttbullar');
  expect(FoodElement).not.toBe(undefined);
  expect(foodText).toBeInTheDocument();
});
