import { MouseEventHandler, useState } from 'react';
import './App.css';
import { Grid } from './grid/Grid';
import { MarsRover } from './MarsRover/MarsRover';

type AppProps = {
  roverLocationX: Number,
  roverLocationY: Number
};

export const App = ( { roverLocationX, roverLocationY } : AppProps ) => {
  const [location, setLocation] = useState("");

  const moveRover: MouseEventHandler = () => {
      let marsRover = new MarsRover();
      let result = marsRover.execute('M');
      setLocation(`${result.positionX}:${result.positionY}:${result.compass}`);
    }

 return <div className='App'>
 <header className='App-header'>
   <div>
     <Grid squares={[[],[]]} />
     <div>
       <button onClick={moveRover}>Move</button>
     </div>
     <p>{location}</p>
   </div>
 </header>
</div>
}



