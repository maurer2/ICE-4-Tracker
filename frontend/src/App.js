import React, { Component } from 'react';
import './App.css';
import SearchField from './SearchField/SearchField';
import SuggestionList from './SuggestionList/SuggestionList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainNumbers: ['500', '600', '700'],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          ICE-4 Suche
        </header>
        <main className="App-main">
          <form action="" className="form" method="post" autoComplete="off" noValidate onSubmit={ e => e.preventDefault() }>
            <SearchField />
            <SuggestionList trainNumbers={ this.state.trainNumbers } showSugestions/>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
