import React from 'react';
import {shallow} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Should render without crashing', () => {
    shallow(<GuessCount />);
  });
  
  it('should present the correct number of guesses', () => {
    const guessCount = 5;
    const wrapper = shallow(<GuessCount guessCount={guessCount}/>);
    expect(wrapper.contains(
      <span id="count">{guessCount}</span>
    )).toEqual(true);
  });

  it('Should use singular/plural as appropriate', () => {
    let guessCount = 1;
    const singular = 'guess';
    const plural = 'guesses';
    let wrapper = shallow(<GuessCount guessCount={guessCount} />);
    expect(wrapper.contains(singular)).toEqual(true);
    guessCount = 5;
    wrapper = shallow(<GuessCount guessCount={guessCount} />);
    expect(wrapper.contains(plural)).toEqual(true);
  })

  it('Should use \'guessCount\' as h2 id', () => {
    let guessCount = 5;
    let wrapper = shallow(<GuessCount guessCount={guessCount} />);
    expect((wrapper.find('#guessCount')).length).toBe(1);
  })
})