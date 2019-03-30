import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Suggestion.module.css';

const Suggestion = (props) => {
  const { selectedTrainNumber, trainNumber } = props;

  return (
    <li
      className={ classNames(
        styles.suggestion,
        {
          [styles['suggestion--is-active']]: selectedTrainNumber === trainNumber
        },
      )}
    >
      { trainNumber }
    </li>
  );
};

export default Suggestion;

Suggestion.propTypes = {
  selectedTrainNumber: PropTypes.string,
  trainNumber: PropTypes.string,
};
