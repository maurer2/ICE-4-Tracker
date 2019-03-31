import React from 'react';
import Suggestion from './Suggestion';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('Suggestion', () => {
  const mockedHandleClick = jest.fn();

  const wrapper = shallow(
    <Suggestion
      isActive={true}
      trainNumber={'500'}
      cbHandleClickEvent={mockedHandleClick}
    />
  );

  it('Suggestion should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
