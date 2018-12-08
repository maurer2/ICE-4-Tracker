import React, { Component } from 'react';
import './SearchField.css';

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  handleChangeEvent(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div className="form-row">
        <input type="search" className="input search" name="search" placeholder="Zugnummer eingeben" autoComplete="off"
          value={ this.state.value } onChange={ this.handleChangeEvent } />
      </div>
    )
  }
}

export default SearchField;
