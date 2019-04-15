import React from 'react';
import TrainDetails from './TrainDetails';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('TrainDetails', () => {
  const dummyTrainDetails = {
    trainNumber: '502',
    origin: 'M�nchen Hbf',
    destination: 'Hamburg-Altona/Hmb Hbf'
  }

  const wrapper = shallow(
    <TrainDetails
      selectedTrainNumber={ '500' }
      trainDetails={ dummyTrainDetails }
    />
  );

  test('TrainDetails should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
