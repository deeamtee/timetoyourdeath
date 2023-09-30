import { FC } from 'react'
import Day from '../Day'
import s from './days.module.css'
import { calculateDeathDate, generateDaysArray } from './days.helpers';
import { Unit } from '@shared/utils/types';
import cn from 'classnames';

interface Props {
    birthDay: string;
    unit: Unit;
    color?: string;
}

const Days: FC<Props> = ({ birthDay, unit = 'years', color = 'red'}) => {
    const birthDate = new Date(birthDay);

    const deathDate = calculateDeathDate(birthDay, unit);
    const days = generateDaysArray(birthDate, deathDate, unit);

    return (
        <div className={cn(s.root, {[s.root_type_month]: unit === 'months'})}>
            {days.map(({past}, i) => (
                <Day past={past} key={i} color={color} />
            ))}
        </div>
    )
}

export default Days

