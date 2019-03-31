import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Suggestion from '../Suggestion/Suggestion';

import styles from './SuggestionList.module.css';

const SuggestionList = (props) => {
  const { showSuggestions, trainNumbers, selectedTrainNumber, cbHandleClickEvent } = props;

  return (
    <ul
      className={ classNames(
        styles.suggestions,
        styles.search, {
          [styles['suggestions--are-visible']]: showSuggestions,
        }
      )}
    >
      {trainNumbers.map((trainNumber, index) => (
        <Suggestion
          isActive={selectedTrainNumber === trainNumber}
          trainNumber={trainNumber}
          cbHandleClickEvent={cbHandleClickEvent}
          key={index}
        />
      ))}
    </ul>
  )
}

export default SuggestionList;

SuggestionList.propTypes = {
  showSuggestions: PropTypes.bool.isRequired,
  trainNumbers: PropTypes.array.isRequired,
  selectedTrainNumber: PropTypes.string.isRequired,
  cbHandleClickEvent: PropTypes.func.isRequired,
};
