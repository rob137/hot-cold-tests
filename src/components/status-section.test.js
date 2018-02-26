import React from 'react';
import {shallow} from 'enzyme';
import StatusSection from './status-section';

describe('<StatusSection />', () => {
  let guesses = [];
  beforeAll(()=> {
    for (var i = 0; i < 10; i++) {
      guesses.push(`This is guess ${i}`);
    }
  }) 
  
  it('Should render without crashing', () => {
    shallow(<StatusSection guesses={guesses}/>);
  })
})