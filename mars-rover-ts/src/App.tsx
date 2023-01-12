import React from 'react';
import './App.css';
import { Grid } from './grid/Grid';

type AppProps = {
  roverLocationX: Number,
  roverLocationY: Number
};

type AppState = {
  gridSquares: string[][];
};

export class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    gridSquares: [],
  };
  render() {
    return <div className='App'>
      <header className='App-header'>
        <div>
          <Grid squares={this.state.gridSquares} />
          <div><button>Move</button></div>
        </div>
      </header>
    </div>
  }
}

export default App;
