import React, { Component } from 'react';
import './SuggestionList.css';

class SuggestionList extends Component {
  render() {
    return (
      <ul className={ `suggestions ${ (this.props.showSuggestions) ? 'suggestions--are-visible' : '' }` }>
        { this.props.trainNumbers.map((trainNumber, index) =>
          <li className={`suggestion ${ this.props.selectedTrainNumber === trainNumber
            ? 'suggestion--is-active' : '' }`} key={ index }>
              { trainNumber }
          </li>)
        }
      </ul>
    )
  }
}

export default SuggestionList;
