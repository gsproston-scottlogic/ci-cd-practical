import { render, screen } from '@testing-library/react';
import Feature from './Feature';

test('renders learn react link', () => {
  render(<Feature />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
