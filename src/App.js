import React from 'react';
import 'bulma/css/bulma.css'
import { Container } from 'bloomer';

import SearchForm from './components/SearchForm';

import './App.css';

function App() {

  return (
    <div className="App">
      <Container />
        <h1>GitHub User lookup!</h1>
        <SearchForm />
    </div>
  );
}

export default App;
