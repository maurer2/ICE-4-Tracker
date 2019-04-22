import React from 'react';
import { shallow } from 'enzyme';

import Suggestion from './Suggestion';

describe('Suggestion', () => {
  const mockedHandleClick = jest.fn();

  const wrapper = shallow(
    <Suggestion
      isActive={true}
      trainNumber={'500'}
      cbHandleClickEvent={mockedHandleClick}
    />
  );

  test('Suggestion should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
