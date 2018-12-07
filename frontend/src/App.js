import React, { Component } from 'react';
import './App.css';
import SearchField from './SearchField/SearchField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          ICE-4 Suche
        </header>
        <main className="App-main">
          <form action="" className="form" method="post" autoComplete="off" noValidate onSubmit={ e => e.preventDefault() }>
            <SearchField />
          </form>
        </main>
      </div>
    );
  }
}

export default App;
