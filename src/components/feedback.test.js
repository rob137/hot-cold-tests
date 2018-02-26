import React from 'react';
import {shallow} from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />', () => {
  it('Should render without crashing', () => {
    shallow(<Feedback />);
  })

  it('should only display \'Guess again!\' once a guess is made', () => {
    let guessCount = 0;
    let wrapper = shallow(<Feedback guessCount={guessCount} />);
    expect(wrapper.contains(
      <span className="visuallyhidden">Guess again!</span>
      )).toEqual(false);
    guessCount = 1;
    wrapper = shallow(<Feedback guessCount={guessCount} />);
    expect(wrapper.contains(
      <span className="visuallyhidden">Guess again!</span>
    )).toEqual(true);
  })

  it('should return correct feedback and \'Guess again!\'', () => {
    const guessCount = Math.floor(Math.random(10) + 1);
    const key = guessCount;
    const guessAgain = <span className="visuallyhidden">Guess again!</span>;
    const feedback = 'foo';
    const wrapper = shallow(<Feedback feedback={feedback} guessCount={guessCount}/>);
    expect(wrapper.contains(feedback)).toEqual(true);
    expect(wrapper.contains(guessAgain)).toEqual(true);
  })
})