import { FC } from 'react';
import s from './day.module.css';
import cn from 'classnames';

interface Props {
    past?: boolean;
    color?: string;
};

const Day: FC<Props> = ({ past, color }) => {
    return <div style={{ background: past ? color : '#fff'}} className={cn(s.root, { [s.root_past]: past })} />
}

export default Day;