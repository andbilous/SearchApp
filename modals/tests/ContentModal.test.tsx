import React from 'react';

import renderer from 'react-test-renderer';

import { ContentModal } from '../ContentModal';

describe('<App />', () => {
  it('has 1 child', () => {
    const component = renderer.create(<ContentModal />);
    expect(component).toBeTruthy();
  });
});
