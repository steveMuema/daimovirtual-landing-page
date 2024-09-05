import React from 'react';
import { shallow } from 'enzyme';
import { HomeParallax } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<HomeParallax />);
  expect(renderedComponent.find('.home-home-parallax').length).toBe(1);
});
