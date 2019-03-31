import React from 'react';
import SearchForm from './SearchForm';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchForm', () => {
  const wrapper = shallow(
    <SearchForm
      showLoader={false}
      trainNumbers={['500', '555']}
    />
  );

  it('SearchForm should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
