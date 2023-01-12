import React from 'react';
import './App.css';
import { Grid } from './grid/Grid';

export class App extends React.Component {
  render() {
    return <div className='App'>
      <header className='App-header'>
        <div>
          <Grid />
          <div><button>Move</button></div>
        </div>
      </header>
    </div>
  }
}

export default App;
