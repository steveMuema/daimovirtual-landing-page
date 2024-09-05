import React from 'react';
import { shallow } from 'enzyme';
import { PrcingTable } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<PrcingTable />);
  expect(renderedComponent.find('.home-prcing-table').length).toBe(1);
});
