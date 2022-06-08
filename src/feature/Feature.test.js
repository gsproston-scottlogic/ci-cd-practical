import { render, screen } from '@testing-library/react';
import Feature from './Feature';

test('renders Hello world', () => {
  render(<Feature />);
  const linkElement = screen.getByText("Hello world.");
  expect(linkElement).toBeInTheDocument();
});
