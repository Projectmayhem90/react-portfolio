import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links', () => {
  render(<App />);
  const workLink = screen.getByText(/Work/i);
  const aboutLink = screen.getByText(/About/i);
  const contactLink = screen.getByText(/Contact/i);
  expect(workLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

test('renders home page by default', () => {
  render(<App />);
  const homePage = screen.getByText(/Welcome to my portfolio/i);
  expect(homePage).toBeInTheDocument();
});