import React, { Component } from 'react';
import './SuggestionList.css';

class SuggestionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: [],
    };
  }

  render() {
    return (
      <ul className={ `suggestions ${ (this.props.showSugestions) ? 'suggestions--are-visible' : '' }` }>
        { this.props.trainNumbers.map((trainNumber, index) =>
          <li className={`suggestion ${ this.props.selectedTrainNumber === trainNumber
            ? 'suggestion--is-active' : '' }`} key={ index }>
            <button type="button" className="button">
              { trainNumber }
            </button>
          </li>)
        }
      </ul>
    )
  }
}

export default SuggestionList;
