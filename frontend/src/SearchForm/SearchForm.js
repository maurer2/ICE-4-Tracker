import React, { Component } from 'react';
import './SearchForm.css';

import SearchField from '../SearchField/SearchField';
import SuggestionList from '../SuggestionList/SuggestionList';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainNumbers: ['500', '600', '700', '800', '900'],
      showSugestions: false,
      isFetchingData: false,
    };

    this.handleSearchFieldFocusEvent = this.handleSearchFieldFocusEvent.bind(this);
    this.handleKeyboardEvents = this.handleKeyboardEvents.bind(this);
  }

  handleSearchFieldFocusEvent(searchFieldHasFocus) {
    this.setState({
      showSugestions: searchFieldHasFocus,
    })
  }

  handleKeyboardEvents(key) {
    const allowedKeys = ['ArrowUp', 'ArrowDown'];

    if (!allowedKeys.includes(key)) {
      return;
    }
  }

  render() {
    return (
      <form action="/" className="form" method="post" autoComplete="off" noValidate="novalidate"
        onSubmit={ (e) => e.preventDefault() }>
        <SearchField cbFieldFocus={ this.handleSearchFieldFocusEvent } cbKeyboardEvent={ this.handleKeyboardEvents } />
        <SuggestionList trainNumbers={ this.state.trainNumbers } showSugestions={ this.state.showSugestions } />
      </form>
    )
  }
}

export default SearchForm;