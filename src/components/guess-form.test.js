import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Should render without crashing', () => {
    shallow(<GuessForm />);
  })

  it('should display a guess button', () => {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper.contains(
      <button
        type="submit"
        name="submit"
        id="guessButton"
        className="button"
      >
        Guess
      </button>
    )).toEqual(true);
  });
/* 
  it('should fire the onSubmit callback when user submits', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onSubmit={callback}/>);
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalled();
  }); */
})