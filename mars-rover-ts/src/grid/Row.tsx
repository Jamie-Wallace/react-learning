import { Square } from './Square';

interface RowProps {
}

export function Row(props: RowProps) {
    let squares = [];

    for (let index = 0; index < 10; index++) {
        squares.push(<Square key={index} value="-" />);
    }

    return <div>{squares}</div>;
}