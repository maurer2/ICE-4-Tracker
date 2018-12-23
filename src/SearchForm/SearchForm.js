import React, { Component } from 'react';
import './SearchForm.css';
import { ReactComponent as Loader } from './loader.svg';

import SearchField from '../SearchField/SearchField';
import SuggestionList from '../SuggestionList/SuggestionList';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSuggestions: false,
      inputValue: this.props.activeTrain,
      newTrainNumber: '',
    };

    this.handleSearchFieldFocusEvent = this.handleSearchFieldFocusEvent.bind(this);
    this.handleKeyboardEvents = this.handleKeyboardEvents.bind(this);
    this.handleClickEvents = this.handleClickEvents.bind(this);
  }

  handleSearchFieldFocusEvent(searchFieldHasFocus) {
    this.setState({
      showSuggestions: true,
    })
  }

  handleKeyboardEvents(key) {
    const allowedKeys = ['ArrowUp', 'ArrowDown', 'Enter'];

    if (!allowedKeys.includes(key)) {
      return;
    }

    if (key === 'Enter') {
      const newTrain = this.state.newTrainNumber;

      this.props.cbTrainChangeEvent(newTrain);

      return;
    }

    this.updateSelectedTrainNumber(key === 'ArrowDown');
  }

  handleClickEvents(trainNumber) {
    this.setState({
      newTrainNumber: trainNumber
    }, () => {
      this.props.cbTrainChangeEvent(trainNumber);
    });
  }

  updateSelectedTrainNumber(goDown) {
    if (this.props.trainNumbers.length === 0) {
      return;
    }

    const selectedTrainNumber = this.state.newTrainNumber;
    const firstTrainNumber = this.props.trainNumbers[0];
    const lastTrainNumber = this.props.trainNumbers[this.props.trainNumbers.length - 1];

    if (goDown) {
      if (selectedTrainNumber === lastTrainNumber) {
        return;
      }

      const nextIndex = this.props.trainNumbers.indexOf(selectedTrainNumber) + 1;

      this.setState({
        newTrainNumber: this.props.trainNumbers[nextIndex]
      })
    } else {
      if (selectedTrainNumber === firstTrainNumber) {
        return;
      }

      const prevIndex = this.props.trainNumbers.indexOf(selectedTrainNumber) - 1;

      this.setState({
        newTrainNumber: this.props.trainNumbers[prevIndex]
      })
    }
  }

  render() {
    return (
      <form action="/" className="form" method="post" autoComplete="off" noValidate="novalidate"
        onSubmit={ (e) => e.preventDefault() }>
        <h2 className="subtitle">
          Nummern&shy;suche
        </h2>
        <div className="form-row">
          { this.props.showLoader && <Loader className="loader"></Loader> }
          <SearchField cbFieldFocus={ this.handleSearchFieldFocusEvent } cbKeyboardEvent={ this.handleKeyboardEvents } />
        </div>
        <div className="form-row">
          <SuggestionList showSuggestions={ this.state.showSuggestions } trainNumbers={ this.props.trainNumbers }
            selectedTrainNumber={ this.state.newTrainNumber } cbHandleClickEvents={ this.handleClickEvents } />
        </div>
      </form>
    )
  }
}

export default SearchForm;
