import React, { Component } from 'react';

import styles from './App.module.css';
import SearchForm from './SearchForm/SearchForm';
import TrainDetails from './TrainDetails/TrainDetails';

import Scraper from './Scraper/scraper';
import config from './Scraper/scraper.conf';

import trainData from './mockData/trains.json';

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

  fetchMockData() {
    const mockedTrainData = new Promise((resolve) => resolve(trainData));

    return mockedTrainData
      .then((entries) => {
        const sortedEntries = [...entries].sort((entry1, entry2) => {
          return entry1.trainNumber - entry2.trainNumber;
        })

        return sortedEntries.slice(0, 5);
      })
      .then((entries) => {
        // extract only number for now
        const trainNumbers = entries.map((entry) => entry.trainNumber);

        return(trainNumbers);
      });
  }

  fetchData(){
    const scraperFernbahn = new Scraper(config);

    return scraperFernbahn
      .scrapeData()
      .then((entries) => {
        const sortedEntries = [...entries].sort((entry1, entry2) => {
          return entry1.trainNumber - entry2.trainNumber;
        })

        return sortedEntries
      })
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

    const fetchedTrainData = (process.env.NODE_ENV === 'development')?
      this.fetchMockData() : this.fetchData();

    fetchedTrainData
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
    const { trainNumbers, isLoading, activeTrain, selectedTrainNumber } = this.state;

    return (
      <div className={ styles.app }>
        <header className={ styles.header }>
          <h1 className={ styles.title }>
            ICE-4 Suche
          </h1>
        </header>
        <main className={ styles.main }>
          <SearchForm
            trainNumbers={ trainNumbers }
            showLoader={ isLoading }
            activeTrain={ activeTrain }
            cbTrainChangeEvent={ this.handleTrainChangeEvent }
          />
          { !isLoading && selectedTrainNumber !== '' ?
            <TrainDetails selectedTrainNumber={ selectedTrainNumber } /> : ''
          }
        </main>
      </div>
    );
  }
}

export default App;
