import React from 'react';
import {shallow} from 'enzyme';
import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Should render without crashing', () => {
    shallow(<AuralStatus />);
  })

  it('is initially hidden', () => {
    const wrapper = shallow(<AuralStatus />);
    expect(wrapper.hasClass('visuallyhidden')).toEqual(true);
  })

  it('presents the aural status in a <p> tag', () => {
    const text = 'Foo';
    const wrapper = shallow(<AuralStatus auralStatus={text} />);
    expect(wrapper.contains(
      <p id="status-readout" 
        className="visuallyhidden" 
        aria-live="assertive" 
        aria-atomic="true">
        {text}
      </p>)).toEqual(true);
  })
})