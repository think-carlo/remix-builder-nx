import { render } from '@testing-library/react';
import Card, { CardVariants } from './card';

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card variant={CardVariants.NEUTRAL} />);
    expect(baseElement).toBeTruthy();
  });
});
