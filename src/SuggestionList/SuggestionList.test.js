import React from 'react';
import SuggestionList from './SuggestionList';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('SuggestionList', () => {
  const mockedHandleClick = jest.fn();

  const wrapper = shallow(
    <SuggestionList
      showSuggestions={true}
      trainNumbers={['500', '600', '700']}
      selectedTrainNumber={'500'}
      cbHandleClickEvent={mockedHandleClick}
    />
  );

  it('SuggestionList should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
