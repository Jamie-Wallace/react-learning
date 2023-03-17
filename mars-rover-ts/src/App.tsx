import { MouseEventHandler, useState } from 'react';
import './App.css';
import { Grid } from './grid/Grid';
import { MarsRover } from './MarsRover/MarsRover';
import { Position } from './MarsRover/Position';

export const App = () => {
  const [location, setLocation] = useState("");
  const [squares, setSquares] = useState([['^', '', ''], ['', '', ''], ['', '', '']]);
  const [lastPosition, setLastPosition] = useState(new Position('N', 0, 0));
  const [rover] = useState(new MarsRover());

  const moveRover: MouseEventHandler = () => {
      let result = rover.execute('M');

      var newSquares = [...squares];

      newSquares[lastPosition.positionY][lastPosition.positionX] = '';

      newSquares[result.positionY][result.positionX] = '^';

      setSquares(newSquares);
      setLastPosition(result);
      setLocation(`${result.positionX}:${result.positionY}:${result.compass}`);
    }

    const turnRoverRight: MouseEventHandler = () => {
      let result = rover.execute('R');

      var newSquares = [...squares];

      newSquares[lastPosition.positionY][lastPosition.positionX] = '';
      // TODO: likely belongs in the Rover or some styling component.
      if (result.compass === 'E') {
        newSquares[result.positionY][result.positionX] = '>';
      } else if (result.compass === 'S') {
        newSquares[result.positionY][result.positionX] = 'V';
      } else if (result.compass === 'W') {
        newSquares[result.positionY][result.positionX] = '<';
      }

      setSquares(newSquares);
      setLastPosition(result);
      setLocation(`${result.positionX}:${result.positionY}:${result.compass}`);
    }

 return <div className='App'>
 <header className='App-header'>
   <div>
     <Grid squares={squares} />
     <div>
       <button onClick={moveRover}>Move</button>
       <button onClick={turnRoverRight}>R</button>
     </div>
     <p>{location}</p>
   </div>
 </header>
</div>
}
