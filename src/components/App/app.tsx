import { ChangeEvent } from 'react'
import { Days } from '@components/Days'
import s from './app.module.css'
import { Unit } from '@shared/utils/types'
import { capitalize } from '@shared/utils/helpers'
import { useLocalStorageState as useStorage } from '@shared/utils/hooks'

const options: Unit[] = ['months', 'years']

function App() {
    const [birthDay, setBirthDay] = useStorage<string>('birthDay', '2000-01-01')
    const [unit, setUnit] = useStorage<Unit>('unit', 'years')
    const [color, setColor] = useStorage<string>('color', 'red');

    const handleChangeBirthday = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthDay(e.target.value)
    }

    const handleUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setUnit(e.target.value as Unit)
    }

    const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    }

    return (
        <div className={s.page}>
            <div className={s.root}>
                <div className={s.controls}>
                    <input
                        className={s.inputDate}
                        type="date"
                        value={birthDay}
                        onChange={handleChangeBirthday}
                    />
                    <select name="unit" value={unit} onChange={handleUnitChange}>
                        {options.map((unit) => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                    <input type="color" value={color} onChange={handleChangeColor}/>
                </div>
                <h1 className={s.title}>{capitalize(unit)} to your death</h1>
                <Days birthDay={birthDay} unit={unit} color={color} />
            </div>
        </div>
    )
}

export default App
