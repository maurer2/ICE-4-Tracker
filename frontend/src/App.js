import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';
import TrainDetails from './TrainDetails/TrainDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">ICE-4 Suche</h1>
        </header>
        <main className="main">
          <SearchForm />
          <TrainDetails />
        </main>
      </div>
    );
  }
}

export default App;
