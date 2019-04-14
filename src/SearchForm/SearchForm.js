import React, { Component } from 'react';

import styles from './SearchForm.module.css';

import SearchField from '../SearchField/SearchField';
import SuggestionList from '../SuggestionList/SuggestionList';
import Spinner from '../Spinner/Spinner';

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
    this.handleClickEvent = this.handleClickEvent.bind(this);
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

  handleClickEvent(trainNumber) {
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
    const { showSuggestions, newTrainNumber } = this.state;
    const { showLoader, trainNumbers } = this.props;

    return (
      <form
        action="/"
        className={ styles.form }
        method="post"
        autoComplete="off"
        noValidate="novalidate"
        onSubmit={ (event) => event.preventDefault() }
      >
        <h2 className={ styles.title }>
          Nummern&shy;suche
        </h2>
        <div className={ styles['form-row'] }>
          { showLoader && (
            <div className={ styles['spinner-overlay'] } >
              <Spinner />
            </div>
          )}
          <SearchField
            cbFieldFocus={ this.handleSearchFieldFocusEvent }
            cbKeyboardEvent={ this.handleKeyboardEvents }
          />
        </div>
        <div className={ styles.formRow }>
          <SuggestionList
            showSuggestions={ showSuggestions }
            trainNumbers={ trainNumbers }
            selectedTrainNumber={ newTrainNumber }
            cbHandleClickEvent={ this.handleClickEvent }
          />
        </div>
      </form>
    )
  }
}

export default SearchForm;
