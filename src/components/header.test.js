import React from 'react';
import {shallow} from 'enzyme';
import Header from './header';

describe('<Header />', () => {
  it('Should render without crashing', () => {
    shallow(<Header />);
  })

  it('should display the <h1> title', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains(<h1>HOT or COLD</h1>)).toEqual(true);
  })
})