import { MouseEventHandler, useState } from 'react';
import { isJsxElement } from 'typescript';
import './App.css';
import { Grid } from './grid/Grid';
import { MarsRover } from './MarsRover/MarsRover';
import { MarsRoverComponent } from './MarsRover/MarsRoverComponent';
import { Position } from './MarsRover/Position';

export const App = () => {
  const [location, setLocation] = useState("");
  const [squares, setSquares] = useState([['^', '', ''], ['', '', ''], ['', '', '']]);
 //const [squares, setSquares] = useState[<MarsRoverComponent direction = "N"/>];
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

      // TODO: likely belongs in the Rover or some styling component.
      
      const hashMap = new Map<string, string>([
        ['N', '^'],
        ['E', '>'],
        ['S', 'V'],
        ['W', '<'],
      ]);

      var displayValue =  hashMap.get(result.compass)!;
      newSquares[lastPosition.positionY][lastPosition.positionX] = '';
      newSquares[result.positionY][result.positionX] = displayValue;
     
    
     // newSquares[result.positionY][result.positionX] = <MarsRoverComponent direction = result.compass />
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
