import React from 'react';
import { shallow } from 'enzyme';

import SearchForm from './SearchForm';

describe('SearchForm', () => {
  const mockUpdateTrain = jest.fn();

  const wrapper = shallow(
    <SearchForm
      trainNumbers={['500', '555']}
      showLoader={false}
      activeTrain="500"
      cbUpdateActiveTrain={mockUpdateTrain}
    />
  );

  test('SearchForm should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
