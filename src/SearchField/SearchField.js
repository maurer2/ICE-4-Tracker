import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './SearchField.module.css';

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasFocus: false,
    };

    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleFocusEvent = this.handleFocusEvent.bind(this);
    this.handleBlurEvent = this.handleBlurEvent.bind(this);
    this.handleKeyUpEvent = this.handleKeyUpEvent.bind(this);
  }

  handleChangeEvent(event) {
    // this.setState({ value: event.target.value });
    console.log(event.target.value);
  }

  handleFocusEvent() {
    const { cbFieldFocus } = this.props;

    this.setState({ hasFocus: true }, () => {
      cbFieldFocus(true);
    });
  }

  handleBlurEvent() {
    const { cbFieldFocus } = this.props;

    this.setState({ hasFocus: false }, () => {
      cbFieldFocus(false);
    });
  }

  handleKeyUpEvent(event) {
    const { cbKeyboardEvent } = this.props;
    const key = event.key;

    if (key === undefined) {
      return;
    }

    cbKeyboardEvent(key);
  }

  render() {
    const { value } = this.props;

    return (
      <input
        className={ classNames(styles.field, styles.search) }
        value={ value }
        type="search"
        name="search-field"
        id="search-field"
        placeholder="Zugnummer eingeben"
        autoComplete="off"
        onChange={ this.handleChangeEvent }
        onFocus={ this.handleFocusEvent }
        onBlur={ this.handleBlurEvent }
        onKeyUp={ this.handleKeyUpEvent }
      />
    )
  }
}

export default SearchField;

SearchField.propTypes = {
  value: PropTypes.string,
  cbKeyboardEvent: PropTypes.func,
  cbFieldFocus: PropTypes.func,  
};
