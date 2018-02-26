import React from 'react';
import {shallow} from 'enzyme';
import InfoSection from './info-section';

describe('<InfoSection />', () => {
  it('Should render without crashing', () => {
    shallow(<InfoSection />);
  })
  it('Should render section with tabIndex of -1', () => {
    const wrapper = shallow(<InfoSection />);
    expect((wrapper.find('[tabIndex="-1"]')).length).toBe(1);
  })
})