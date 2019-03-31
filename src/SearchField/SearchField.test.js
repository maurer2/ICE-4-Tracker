import React from 'react';
import SearchField from './SearchField';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

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

  it('SearchField should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
