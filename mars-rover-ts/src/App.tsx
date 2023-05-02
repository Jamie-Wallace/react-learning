import { MouseEventHandler, useState } from 'react';
import './App.css';
import { Grid } from './grid/Grid';
import { Square } from './grid/Square';
import { MarsRover } from './MarsRover/MarsRover';
import { MarsRoverComponent } from './MarsRover/MarsRoverComponent';
import { Position } from './MarsRover/Position';

export const App = () => {
  const [location, setLocation] = useState("");
  const [squares, setSquares] = useState([
                                [<MarsRoverComponent direction='N' />, <Square />, <Square />], 
                                [<Square />, <Square />, <Square />], 
                                [<Square />, <Square />, <Square />]
                              ]);
  const [lastPosition, setLastPosition] = useState(new Position('N', 0, 0));
  const [rover] = useState(new MarsRover());

  const moveRover: MouseEventHandler = () => {
      let result = rover.execute('M');

      var newSquares = [...squares];

      newSquares[lastPosition.positionY][lastPosition.positionX] = <Square />;

      newSquares[result.positionY][result.positionX] = <MarsRoverComponent direction={result.compass}/>;

      setSquares(newSquares);
      setLastPosition(result);
      setLocation(`${result.positionX}:${result.positionY}:${result.compass}`);
    }

    const turnRoverRight: MouseEventHandler = () => {
      let result = rover.execute('R');

      var newSquares = [...squares];

      newSquares[lastPosition.positionY][lastPosition.positionX] = <Square />;
      newSquares[result.positionY][result.positionX] = <MarsRoverComponent direction={result.compass} />;

      setSquares(newSquares);
      setLastPosition(result);
      setLocation(`${result.positionX}:${result.positionY}:${result.compass}`);
    }

    const turnRoverLeft: MouseEventHandler = () => {
      let result = rover.execute('L');

      var newSquares = [...squares];

      newSquares[lastPosition.positionY][lastPosition.positionX] = <Square />;
      newSquares[result.positionY][result.positionX] = <MarsRoverComponent direction={result.compass} />;

      setSquares(newSquares);
      setLastPosition(result);
      setLocation(`${result.positionX}:${result.positionY}:${result.compass}`);
    }

 return <div className='App'>
 <header className='App-header'>
   <div>
     <Grid squares={squares} />
     <div>
       <button onClick={turnRoverLeft}>L</button>
       <button onClick={moveRover}>Move</button>
       <button onClick={turnRoverRight}>R</button>
     </div>
     <p>{location}</p>
   </div>
 </header>
</div>
}
