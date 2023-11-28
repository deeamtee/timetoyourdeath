import { ChangeEvent, useId, useRef } from "react";


const Progress = () => {
    const days = [{ id: 0, uuid: useId()}, { id: 1, uuid: useId()}, { id: 2, uuid: useId()} ,{ id: 3, uuid: useId()}];
    const inputsRef = useRef<any>({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        inputsRef.current = {
            [event.target.id]: event.target.checked
        }
        console.log(inputsRef.current)
    };

    return (
        <div onChange={handleChange}>
            {days.map(({ id, uuid }) => {
                return <input value={inputsRef.current[uuid]} key={id} type="checkbox" name={`checkbox-${id}`} id={uuid} />
            })}
        </div>
    )
}

export default Progress
