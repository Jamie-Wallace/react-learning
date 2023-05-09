import { Direction } from "./Direction";

interface MarsRoverComponentProps {
  direction: Direction
}

export const MarsRoverComponent = (props : MarsRoverComponentProps) => {
   
    const hashMap = new Map<Direction, string>([
        [Direction.North, '^'],
        [Direction.East, '>'],
        [Direction.South, 'V'],
        [Direction.West, '<'],
      ]);

      var displayValue = hashMap.get(props.direction)!;

      return <span><div className='square'>{displayValue}</div></span>
}