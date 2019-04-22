import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './Spinner';

describe('Spinner', () => {
  const wrapper = shallow(
    <Spinner/>
  );

  test('Spinner should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
