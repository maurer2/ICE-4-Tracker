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
    const allowedKeys = ['ArrowUp', 'ArrowDown', 'Enter'];

    if (!allowedKeys.includes(key)) {
      return;
    }

    if (key === 'Enter') {
      this.activevateSelectedTrainNumber();
      return;
    }

    this.updateSelectedTrainNumber(key === 'ArrowDown');
  }

  activevateSelectedTrainNumber() {}

  updateSelectedTrainNumber(goDown) {
    if (this.state.trainNumbers.length === 0) {
      return;
    }

    const selectedTrainNumber = this.state.selectedTrainNumber;
    const firstTrainNumber = this.state.trainNumbers[0];
    const lastTrainNumber = this.state.trainNumbers[this.state.trainNumbers.length - 1];

    if (goDown) {
      if (selectedTrainNumber === lastTrainNumber) {
        return;
      }

      const nextIndex = this.state.trainNumbers.indexOf(selectedTrainNumber) + 1;

      this.setState({
        selectedTrainNumber: this.state.trainNumbers[nextIndex]
      })
    } else {
      if (selectedTrainNumber === firstTrainNumber) {
        return;
      }

      const prevIndex = this.state.trainNumbers.indexOf(selectedTrainNumber) - 1;

      this.setState({
        selectedTrainNumber: this.state.trainNumbers[prevIndex]
      })
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
