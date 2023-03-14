import { MouseEventHandler, useState } from 'react';
import './App.css';
import { Grid } from './grid/Grid';
import { MarsRover } from './MarsRover/MarsRover';
import { Position } from './MarsRover/Position';

export const App = () => {
  const [location, setLocation] = useState("");
  const [squares, setSquares] = useState([['^', '', ''], ['', '', ''], ['', '', '']]);
  const [lastPosition, setLastPosition] = useState(new Position('N', 0, 0));

  const moveRover: MouseEventHandler = () => {
      let marsRover = new MarsRover();

      
      let result = marsRover.execute('M');

      var newSquares = [...squares]; //[['', '', ''], ['', '', ''], ['', '', '']]

      newSquares[lastPosition.positionY][lastPosition.positionX] = '';
      newSquares[result.positionY][result.positionX] = '^';


      setSquares(newSquares);//.reverse());
      setLastPosition(result);
      setLocation(`${result.positionX}:${result.positionY}:${result.compass}`);
    }

 return <div className='App'>
 <header className='App-header'>
   <div>
     <Grid squares={squares} />
     <div>
       <button onClick={moveRover}>Move</button>
     </div>
     <p>{location}</p>
   </div>
 </header>
</div>
}
