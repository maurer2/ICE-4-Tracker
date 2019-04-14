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
      newTrainNumber: '',
    };

    this.handleSearchFieldFocusEvent = this.handleSearchFieldFocusEvent.bind(this);
    this.handleKeyboardEvents = this.handleKeyboardEvents.bind(this);
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleSearchFieldFocusEvent(searchFieldHasFocus) {
    if (searchFieldHasFocus) {
      this.setState({showSuggestions: true});
      return;
    }
    if (!(this.state.showSuggestions)) {
      this.setState({showSuggestions: false});
    }
  }

  handleKeyboardEvents(key) {
    const allowedKeys = ['ArrowUp', 'ArrowDown', 'Enter'];

    if (!allowedKeys.includes(key)) {
      return;
    }

    if (key === 'Enter') {
      const { newTrainNumber } = this.state;

      this.props.cbUpdateActiveTrain(newTrainNumber);
      //this.searchField.blur();
      // workaround
      document.activeElement.blur();
      this.setState({showSuggestions: false});

      return;
    }

    if (key === 'ArrowDown') {
      this.updateSelectedTrainNumber(true);
      
      return;
    }

    this.updateSelectedTrainNumber(false);
  }

  handleClickEvent(trainNumber) {
    this.setState({
      newTrainNumber: trainNumber,
      showSuggestions: false,
    }, () => {
      this.props.cbUpdateActiveTrain(trainNumber);
    });
  }

  updateSelectedTrainNumber(goDown) {
    if (this.props.trainNumbers.length === 0) {
      return;
    }

    const { newTrainNumber } = this.state;
    const { trainNumbers } = this.props;

    const firstTrainNumber = trainNumbers[0];
    const lastTrainNumber = trainNumbers[trainNumbers.length - 1];
    if (goDown) {
      // last entry
      if (newTrainNumber === lastTrainNumber) {
        return;
      }

      const nextIndex = trainNumbers.indexOf(newTrainNumber) + 1;

      this.setState({ newTrainNumber: trainNumbers[nextIndex] });
    } else {
      // first entry
      if (newTrainNumber === firstTrainNumber) {
        return;
      }

      const prevIndex = trainNumbers.indexOf(newTrainNumber) - 1;

      this.setState({ newTrainNumber: trainNumbers[prevIndex] });
    }
  }

  render() {
    const { showSuggestions, newTrainNumber } = this.state;
    const { showLoader, trainNumbers, activeTrain } = this.props;

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
          <label htmlFor="search-field">
            Nummern&shy;suche
          </label>
        </h2>
        <div className={ styles['form-row'] }>
          { showLoader && (
            <div className={ styles['spinner-overlay'] }>
              <Spinner />
            </div>
          )}
          <SearchField
            cbFieldFocus={ this.handleSearchFieldFocusEvent }
            cbKeyboardEvent={ this.handleKeyboardEvents }
            value={ activeTrain }
            id="search-field"
            name="search-field"
            ref={ c => this.searchField = c }
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
