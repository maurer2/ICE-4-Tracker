import React, { Component } from 'react';
import './SearchForm.css';

import SearchField from '../SearchField/SearchField';
import SuggestionList from '../SuggestionList/SuggestionList';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainNumbers: [],
      showSugestions: false,
      isFetchingData: false,
    };

    this.handleSearchFieldFocusEvent = this.handleSearchFieldFocusEvent.bind(this);
    this.handleKeyboardEvents = this.handleKeyboardEvents.bind(this);
  }

  handleSearchFieldFocusEvent(searchFieldHasFocus) {
    this.setState({
      showSugestions: searchFieldHasFocus && this.state.trainNumbers.length > 0,
    })
  }

  handleKeyboardEvents(key) {
    const allowedKeys = ['ArrowUp', 'ArrowDown'];

    if (!allowedKeys.includes(key)) {
      return;
    }
  }

  fetchData(){
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        const trainNumbers = ['500', '600', '700', '800', '900'];

        resolve(trainNumbers)
      }, 2500);
    })
  }

  componentDidMount() {
    this.fetchData()
      .then((data) => {
        this.setState({
          trainNumbers: data
        })
      });
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