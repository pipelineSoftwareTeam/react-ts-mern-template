import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Component imports
import { Home } from '../pages';

describe('Simple working test', () => {
  it('has class yeah__nice', () => {
    render(<Home />);

    const div = screen.getByTestId('home');
    expect(div).toHaveClass('yeah__nice');
  });

  it('renders yeah nice', () => {
    render(<Home />);

    const headingEl = screen.getByRole('heading', { level: 1 });

    expect(headingEl).toBeInTheDocument();
    expect(headingEl).toHaveTextContent('Yeah Nice');
  });
});
