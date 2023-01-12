import { Row } from './Row';

interface GridProps {
}

export function Grid(props: GridProps) {
    let rows = [];

    for (let index = 0; index < 10; index++) {
        rows.push(<Row key={index} />);
    }

    return <div>{rows}</div>;
}