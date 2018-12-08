import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          ICE-4 Suche
        </header>
        <main className="App-main">
          <SearchForm />
        </main>
      </div>
    );
  }
}

export default App;
