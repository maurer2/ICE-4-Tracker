import React from 'react';
import { shallow } from 'enzyme';

import TrainDetails from './TrainDetails';

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
    expect(wrapper).toMatchSnapshot();
  });

});
