import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import TrainDetails from './TrainDetails/TrainDetails';

import Scraper from './Scraper/scraper';
import config from './Scraper/scraper.conf';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      trainNumbers: [],
      activeTrain: '',
      isLoading: false,
      selectedTrainNumber: '',
    };

    this.handleTrainChangeEvent = this.handleTrainChangeEvent.bind(this);
  }

  fetchData(){
    const scraperFernbahn = new Scraper(config);

    return scraperFernbahn
      .scrapeData()
      .then((entries) => {
        // extract only number for now
        const trainNumbers = entries.map((entry) => entry.trainNumber);

        return(trainNumbers);
      });
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    this.fetchData()
      .then((trains) => {
        this.setState({
          trainNumbers: trains,
          showSuggestions: true,
          isLoading: false,
        })
      })
      .catch(() => {
        this.setState({
          trainNumbers: [],
        })
      });
  }

  handleTrainChangeEvent(newTrainNumber) {
    this.setState({
      selectedTrainNumber: newTrainNumber,
    });
  }

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
            cbTrainChangeEvent={ this.handleTrainChangeEvent } />
          { !this.state.isLoading && this.state.selectedTrainNumber !== '' ?
            <TrainDetails selectedTrainNumber={ this.state.selectedTrainNumber } /> : ''
          }
        </main>
      </div>
    );
  }
}

export default App;