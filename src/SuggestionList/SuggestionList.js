import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './SuggestionList.module.css';

class SuggestionList extends Component {
  constructor(props) {
    super(props);

    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent(event) {
    const { trainNumber } = event.target.dataset;

    this.props.cbHandleClickEvents(trainNumber);
  }

  render() {
    const { showSuggestions, selectedTrainNumber } = this.props;

    return (
      <ul
        className={ classNames(
          styles.suggestions,
          styles.search, {
            [styles['suggestions--are-visible']]: showSuggestions,
          }
        )}
      >
        { this.props.trainNumbers.map((trainNumber, index) =>
          <li
            className={ classNames(
              styles.suggestion,
              {
                [styles['suggestion--is-active']]: selectedTrainNumber === trainNumber
              },
            )}
            key={ index }
            data-train-number={ trainNumber }
            onClick={ this.handleClickEvent }
          >
            { trainNumber }
          </li>)
        }
      </ul>
    )
  }
}

export default SuggestionList;
