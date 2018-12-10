import React, { Component } from 'react';
import './SearchForm.css';
import { ReactComponent as Loader } from './loader.svg';

import SearchField from '../SearchField/SearchField';
import SuggestionList from '../SuggestionList/SuggestionList';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainNumbers: [],
      selectedTrainNumber: '',
      showSugestions: false,
      showLoader: false,
    };

    this.handleSearchFieldFocusEvent = this.handleSearchFieldFocusEvent.bind(this);
    this.handleKeyboardEvents = this.handleKeyboardEvents.bind(this);
  }

  handleSearchFieldFocusEvent(searchFieldHasFocus) {
    this.setState({
      // showSugestions: searchFieldHasFocus,
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
      this.setState({
        showLoader: true,
      })

      window.setTimeout(() => {
        const trainNumbers = ['500', '600', '700', '800', '900'];

        this.setState({
          showLoader: false,
        })

        resolve(trainNumbers)
      }, 2500);
    })
  }

  componentDidMount() {
    this.fetchData()
      .then((data) => {
        this.setState({
          trainNumbers: data,
          showSugestions: true,
        })
      });
  }

  render() {
    return (
      <form action="/" className="form" method="post" autoComplete="off" noValidate="novalidate"
        onSubmit={ (e) => e.preventDefault() }>
        <div className="form-row">
          { this.state.showLoader && <Loader className="loader"></Loader> }
          <SearchField cbFieldFocus={ this.handleSearchFieldFocusEvent }
            cbKeyboardEvent={ this.handleKeyboardEvents } />
        </div>
        <div className="form-row">
          <SuggestionList trainNumbers={ this.state.trainNumbers }
            selectedTrainNumber={this.state.selectedTrainNumber} showSugestions={ this.state.showSugestions } />
        </div>
      </form>
    )
  }
}

export default SearchForm;
