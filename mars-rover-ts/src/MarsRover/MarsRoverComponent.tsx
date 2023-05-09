interface MarsRoverComponentProps {
  direction: string
}

export const MarsRoverComponent = (props : MarsRoverComponentProps) => {
   
    const hashMap = new Map<string, string>([
        ['N', '^'],
        ['E', '>'],
        ['S', 'V'],
        ['W', '<'],
      ]);

      var displayValue = hashMap.get(props.direction)!;

      return <span><div className='square'>{displayValue}</div></span>
}