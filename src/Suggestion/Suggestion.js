import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Suggestion.module.css';

const Suggestion = (props) => {
  const { isActive, trainNumber, cbHandleClickEvent } = props;

  const handleClickEvent = () => cbHandleClickEvent(trainNumber);

  return (
    <li
      className={ classNames(
        styles.suggestion,
        {
          [styles['suggestion--is-active']]: isActive,
        },
      )}
      onClick={handleClickEvent}
    >
      { trainNumber }
    </li>
  );
};

export default Suggestion;

Suggestion.propTypes = {
  isActive: PropTypes.bool.isRequired,
  trainNumber: PropTypes.string.isRequired,
  cbHandleClickEvent: PropTypes.func.isRequired,
};
