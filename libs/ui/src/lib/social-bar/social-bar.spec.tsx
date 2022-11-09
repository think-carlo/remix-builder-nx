import { render } from '@testing-library/react';

import SocialBar from './social-bar';

describe('SocialBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialBar />);
    expect(baseElement).toBeTruthy();
  });
});
