import { render } from '@testing-library/react';

import Text from './text';

describe('Text', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Text name="spec" />);
    expect(baseElement).toBeTruthy();
  });
});
