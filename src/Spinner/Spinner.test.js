import React from 'react';
import Spinner from './Spinner';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('Spinner', () => {
  const wrapper = shallow(
    <Spinner/>
  );

  it('Spinner should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
