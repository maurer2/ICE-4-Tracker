import React, { Component } from 'react';
import './SuggestionList.css';

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
    return (
      <ul className={ `suggestions ${ (this.props.showSuggestions) ? 'suggestions--are-visible' : '' }` }>
        { this.props.trainNumbers.map((trainNumber, index) =>
          <li className={`suggestion ${ this.props.selectedTrainNumber === trainNumber ? 'suggestion--is-active' : '' }`}
            key={ index } data-train-number={ trainNumber } onClick={ this.handleClickEvent }>
            { trainNumber }
          </li>)
        }
      </ul>
    )
  }
}

export default SuggestionList;
