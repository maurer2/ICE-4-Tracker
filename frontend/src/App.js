import React, { Component } from 'react';
import './App.css';
import SearchField from './Search/SearchField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          ICE-4 Suche
        </header>
        <main>
          <form action="" onSubmit={ e => e.preventDefault() }>
            <SearchField />
          </form>
        </main>
      </div>
    );
  }
}

export default App;
