import { render } from '@testing-library/react';

import UiRemix from './ui-remix';

describe('UiRemix', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiRemix />);
    expect(baseElement).toBeTruthy();
  });
});
