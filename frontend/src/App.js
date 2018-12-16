import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import TrainDetails from './TrainDetails/TrainDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainNumbers: [],
      activeTrain: '',
      isLoading: false,
    };

    // this.handleInputEvent = this.handleInputEvent.bind(this);
  }

  // dumy
  fetchData(){
    return new Promise((resolve) => {
      this.setState({
        isLoading: true,
      });

      window.setTimeout(() => {
        const trainNumbers = ['500', '600', '700', '800', '900'];

        this.setState({
          isLoading: false,
        });

        resolve(trainNumbers)
      }, 500);
    })
  }

  componentDidMount() {
    this.fetchData()
      .then((trains) => {
        this.setState({
          trainNumbers: trains,
          showSuggestions: true,
        })
      })
      .catch(() => {
        this.setState({
          trainNumbers: [],
        })
      });
  }

  /*
  handleInputEvent(inputValue) {
    this.setState({
      // selectedTrainNumber: inputValue,
    });
  }
  */

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">
            ICE-4 Suche
          </h1>
        </header>
        <main className="main">
          <SearchForm trainNumbers={ this.state.trainNumbers } showLoader={ this.state.isLoading } activeTrain={ this.state.activeTrain }
            /* cbInputEvent={ this.handleInputEvent() } */ />
          { !this.state.isLoading && this.state.activeTrain !== '' ?
            <TrainDetails activeTrain={ this.state.activeTrain } /> : ''
          }
        </main>
      </div>
    );
  }
}

export default App;
