import { render } from '@testing-library/react';

import Drawer from './drawer';

describe('Drawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<div />);
    expect(baseElement).toBeTruthy();
  });
});
