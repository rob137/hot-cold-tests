import React from 'react';
import { shallow } from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
  const guesses = [];
  beforeAll(() => {
    for (var i = 0; i < 10; i++) {
      guesses.push(`Guess ${i}`)
    }
  });

  it('Should render without crashing', () => {
    shallow(<GuessList guesses={guesses}/>);
  });

  it('should render a <ul> element', () => {
    const wrapper = shallow(<GuessList guesses={guesses}/>);
    expect((wrapper.find('ul')).length).toBe(1);
  });

  it('should render as many lis as there are guesses', () => {
    const wrapper = shallow(<GuessList guesses={guesses} />);
    expect((wrapper.find('li')).length).toBe(guesses.length);
  })
})