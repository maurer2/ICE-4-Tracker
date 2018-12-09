import React, { Component } from 'react';
import './SuggestionList.css';

class SuggestionList extends Component {
  render() {
    return (
      <ul className={ `suggestions ${ (this.props.showSugestions) ? 'suggestions--are-visible' : '' }` }>
        { this.props.trainNumbers.map((trainNumber, index) =>
          <li className="suggestion" key={ index }>
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
