interface SquareProps {
    value: string,
    xCoordinate: number,
    yCoordinate: number
}

export const Square = (props: SquareProps) => {
    let testId = `square_${props.xCoordinate}_${props.yCoordinate}`;
    return (
        <div className='square' data-testid={testId}>{props.value}</div>
    );
}