import React, { Component } from 'react';
import './SearchField.css';

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChangeEvent(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <input type="search" className="input" name="search" placeholder="Zugnummer eingeben"
        value={ this.state.value } onChange={ this.handleChangeEvent.bind(this) } />
    )
  }
}

export default SearchField;
