import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductGrid from '../../app/templates/ProductGrid.jsx';

configure({ adapter: new Adapter() });

describe('Test Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProductGrid />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });
  
  it('should have one heading', () => {
    expect(wrapper.find('.grid-item').type()).toEqual('a');
  });
});