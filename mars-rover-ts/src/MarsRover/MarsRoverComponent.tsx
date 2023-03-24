
export const MarsRoverComponent = (direction : string) => {
   
    const hashMap = new Map<string, string>([
        ['N', '^'],
        ['E', '>'],
        ['S', 'V'],
        ['W', '<'],
      ]);

      var displayValue =  hashMap.get(direction)!;

      return <p>{displayValue}</p>
}