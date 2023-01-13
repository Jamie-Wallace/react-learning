interface SquareProps {
    value: String,
}

export function Square(props: SquareProps) {
    return (
        <div className='square'>{props.value}</div>
    );
}