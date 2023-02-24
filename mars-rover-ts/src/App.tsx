import React, { MouseEventHandler } from 'react';
import './App.css';
import { Grid } from './grid/Grid';
import { MarsRover } from './MarsRover/MarsRover';

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
    const moveRover: MouseEventHandler = () => {
      let marsRover = new MarsRover();
      let location = marsRover.execute('M');

      console.warn(`NEW LOCATION ${location}`);
    }

    return <div className='App'>
      <header className='App-header'>
        <div>
          <Grid squares={this.state.gridSquares} roverLocationX={0} roverLocationY={0} />
          <div><button onClick={moveRover}>Move</button></div>
        </div>
      </header>
    </div>
  }
}

export default App;
