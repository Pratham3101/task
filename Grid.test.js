
import { render, screen } from '@testing-library/react';
import Grid from '../components/Grid';

test('renders grid component', () => {
  render(<Grid />);
  expect(screen.getByRole('grid')).toBeInTheDocument();
});
