import React from 'react';
import TrainDetails from './TrainDetails';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('TrainDetails', () => {
  const wrapper = shallow(
    <TrainDetails
      selectedTrainNumber={'500'}
    />
  );

  it('TrainDetails should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
