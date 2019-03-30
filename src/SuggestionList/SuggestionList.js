import React, { Component } from 'react';
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
        className={ `${styles.suggestions} ${ (showSuggestions) ? styles['suggestions--are-visible'] : '' }`}
      >
        { this.props.trainNumbers.map((trainNumber, index) =>
          <li
            className={ `${styles.suggestion} ${ selectedTrainNumber === trainNumber ? styles['suggestion--is-active'] : '' }` }
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
