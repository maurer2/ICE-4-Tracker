import React, { Component } from 'react';
import './SuggestionList.css';

class SuggestionList extends Component {
  constructor(props) {
    super(props);

    this.handleKeyUpEvent = this.handleKeyUpEvent.bind(this);
  }

  handleKeyUpEvent(event) {
    const allowedKeys = {
      up: 38,
      down: 40
    }

    let key = event.key;

    if (key === undefined) {
      key = String.fromCharCode(event.keyCode);
    }
  }

  render() {
    return (
      <ul className={`suggestions ${(this.props.showSuggestions !== '') ? 'suggestions--are-visible' : '' }`}>
        { this.props.trainNumbers.map((trainNumber, index) =>
          <li className="suggestion" key={ index }>{ trainNumber }</li>) }
      </ul>
    )
  }
}

export default SuggestionList;
