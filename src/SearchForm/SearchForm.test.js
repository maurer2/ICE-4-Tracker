import React from 'react';
import SearchForm from './SearchForm';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

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
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
