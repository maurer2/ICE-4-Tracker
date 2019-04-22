import React from 'react';
import { shallow } from 'enzyme';

import SearchField from './SearchField';

describe('SearchField', () => {
  const mockedHandleFieldFocus = jest.fn();
  const mockedHandleKeyboardEvent = jest.fn();

  const wrapper = shallow(
    <SearchField
      showLoader={false}
      trainNumbers={['500', '555']}
      cbFieldFocus={mockedHandleFieldFocus}
      cbKeyboardEvent={mockedHandleKeyboardEvent}
    />
  );

  test('SearchField should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
