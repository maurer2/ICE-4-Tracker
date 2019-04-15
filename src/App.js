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
      trains: [],
      trainNumbers: [],
      isLoading: false,
      activeTrain: '',
    };

    this.updateActiveTrain = this.updateActiveTrain.bind(this);
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
        //const trainNumbers = entries.map((entry) => entry.trainNumber);
        const trainNumbers = entries;

        return(trainNumbers);
      });
  }

  fetchData() {
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
        // const trainNumbers = entries.map((entry) => entry.trainNumber);

        const trainNumbers = entries;

        return(trainNumbers);
      });
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    const fetchedTrainData = (process.env.NODE_ENV === 'development')
      ? this.fetchMockData()
      : this.fetchData();

    fetchedTrainData
      .then((trains) => {
        // extract trainNumbers
        const trainNumbers = trains.map((entry) => entry.trainNumber);

        this.setState({
          trains,
          trainNumbers,
          showSuggestions: true,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          trainNumbers: [],
        });
      });
  }

  updateActiveTrain(newTrainNumber) {
    this.setState({ activeTrain: newTrainNumber });
  }

  getTrainDetailsByNumber(number) {
    const { trains } = this.state;

    return trains.find((element) => element.trainNumber === number);
  }

  render() {
    const { trainNumbers, isLoading, activeTrain } = this.state;
    const trainDetails = this.getTrainDetailsByNumber(activeTrain);

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
            cbUpdateActiveTrain={ this.updateActiveTrain }
          />
          { !isLoading && activeTrain !== '' && (
            <TrainDetails selectedTrainNumber={ activeTrain } trainDetails= { trainDetails } />
          )}
        </main>
      </div>
    );
  }
}

export default App;
