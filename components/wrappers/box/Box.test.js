import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Box } from './Box';

test('renders a box', () => {
  const { getByTestId } = render(<Box data-testid='box' />);
  expect(getByTestId('box')).toBeInTheDocument();
});
