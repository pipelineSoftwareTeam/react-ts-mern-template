import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Component imports
import { WrappedApp } from '../App';

describe('WrappedApp', () => {
  it('Renders yeah nice', () => {
    render(<WrappedApp />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Yeah Nice');
  });
});
