import { render } from '@testing-library/react';

import Header from './header';
import { mockBottomNavigation, mockTopNavigation } from './header.helpers';

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Header
        bottomNavigation={mockBottomNavigation}
        topNavigation={mockTopNavigation}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
