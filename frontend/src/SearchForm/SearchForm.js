import React, { Component } from 'react';
import SearchField from '../SearchField/SearchField';
import SuggestionList from '../SuggestionList/SuggestionList';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainNumbers: ['500', '600', '700'],
      showSugestions: false,
    };

    this.handleSearchFieldFocusEvent = this.handleSearchFieldFocusEvent.bind(this);
  }

  handleSearchFieldFocusEvent(searchFieldHasFocus) {
    this.setState({
      showSugestions: searchFieldHasFocus,
    })
  }

  render() {
    return (
      <form action="/" className="form" method="post" autoComplete="off" noValidate="novalidate"
        onSubmit={ (e) => e.preventDefault() }>
        <SearchField cbFieldFocus={ this.handleSearchFieldFocusEvent } />
        <SuggestionList trainNumbers={ this.state.trainNumbers } showSugestions={ this.state.showSugestions } />
      </form>
    )
  }
}

export default SearchForm;