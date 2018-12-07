import React, { Component } from 'react';
import './SearchField.css';

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      trainNumbers: ['500', '600', '700'],
    };

    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  handleChangeEvent(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleKeyUpEvent(event) {
    let key = event.key;

    if (key === undefined) {
      key = String.fromCharCode(event.keyCode);
    }
  }

  render() {
    return (
      <div className="form-row">
        <input type="search" className="input search" name="search" placeholder="Zugnummer eingeben" autoComplete="off"
          value={ this.state.value } onChange={ this.handleChangeEvent } />
        <ul className={`suggestions ${(this.state.value !== '') ? 'suggestions--are-visible' : '' }`}>
          { this.state.trainNumbers
            .map((trainNumber, index) => <li className="suggestion" key={ index }>{ trainNumber }</li>) }
        </ul>
      </div>
    )
  }
}

export default SearchField;
