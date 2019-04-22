import React from 'react';
import { shallow } from 'enzyme';

import SuggestionList from './SuggestionList';

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

  test('SuggestionList should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
