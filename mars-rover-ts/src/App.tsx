import { MouseEventHandler, useState } from 'react';
import './App.css';
import { Grid } from './grid/Grid';
import { Square } from './grid/Square';
import { MarsRover } from './MarsRover/MarsRover';
import { MarsRoverComponent } from './MarsRover/MarsRoverComponent';
import { Position } from './MarsRover/Position';
import { Coordinates } from './MarsRover/Coordinates';
import { Direction } from './MarsRover/Direction';

export const App = () => {
  const [location, setLocation] = useState("");
  const [squares, setSquares] = useState([
                                [<MarsRoverComponent direction={Direction.North} />, <Square />, <Square />], 
                                [<Square />, <Square />, <Square />], 
                                [<Square />, <Square />, <Square />]
                              ]);
  const [lastPosition, setLastPosition] = useState(new Position(Direction.North, new Coordinates(0, 0)));
  const [rover] = useState(new MarsRover());

  const moveRover: MouseEventHandler = () => {
      let result = rover.execute('M');

      var newSquares = [...squares];

      newSquares[lastPosition.coordinate.positionY][lastPosition.coordinate.positionX] = <Square />;

      newSquares[result.coordinate.positionY][result.coordinate.positionX] = <MarsRoverComponent direction={result.compass}/>;

      setSquares(newSquares);
      setLastPosition(result);
      setLocation(`${result.coordinate.positionX}:${result.coordinate.positionY}:${Direction[result.compass]}`);
    }

    const turnRoverRight: MouseEventHandler = () => {
      let result = rover.execute('R');

      var newSquares = [...squares];

      newSquares[lastPosition.coordinate.positionY][lastPosition.coordinate.positionX] = <Square />;
      newSquares[result.coordinate.positionY][result.coordinate.positionX] = <MarsRoverComponent direction={result.compass} />;

      setSquares(newSquares);
      setLastPosition(result);
      setLocation(`${result.coordinate.positionX}:${result.coordinate.positionY}:${Direction[result.compass]}`);
    }

    const turnRoverLeft: MouseEventHandler = () => {
      let result = rover.execute('L');

      var newSquares = [...squares];

      newSquares[lastPosition.coordinate.positionY][lastPosition.coordinate.positionX] = <Square />;
      newSquares[result.coordinate.positionY][result.coordinate.positionX] = <MarsRoverComponent direction={result.compass} />;

      setSquares(newSquares);
      setLastPosition(result);
      setLocation(`${result.coordinate.positionX}:${result.coordinate.positionY}:${Direction[result.compass]}`);
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
