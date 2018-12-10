import React, { Component } from 'react';
import './SearchField.css';

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      hasFocus: false,
    };

    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleFocusEvent = this.handleFocusEvent.bind(this);
    this.handleBlurEvent = this.handleBlurEvent.bind(this);
    this.handleKeyUpEvent = this.handleKeyUpEvent.bind(this);
  }

  handleChangeEvent(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleFocusEvent(event) {
    this.setState({
      hasFocus: true,
    }, () => {
      this.props.cbFieldFocus(this.state.hasFocus);
    })
  }

  handleBlurEvent(event) {
    this.setState({
      hasFocus: false,
    }, () => {
      this.props.cbFieldFocus(this.state.hasFocus);
    })
  }

  handleKeyUpEvent(event) {
    const key = event.key;

    if (key === undefined) {
      return;
    }

    this.props.cbKeyboardEvent(key);
  }

  render() {
    return (
      <input className="input search" type="search" name="search" placeholder="Zugnummer eingeben" autoComplete="off"
        value={ this.state.value } onChange={ this.handleChangeEvent } onFocus= { this.handleFocusEvent }
        onBlur= { this.handleBlurEvent } onKeyUp={ this.handleKeyUpEvent } />
    )
  }
}

export default SearchField;
