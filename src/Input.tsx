import {ChangeEvent} from "react";

type PropsType = {
    callback: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
}

const Input = (props: PropsType) => {
    return (
        <div>
            <input
                type="number"
                value={props.value}
                onChange={props.callback}
            />
        </div>
    )
}
export default Input