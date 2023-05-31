
type PropsType = {
    name: string
    callback: () => void
}

const Button = (props: PropsType) => {
    return (
        <div>
            <button onClick={props.callback}>{props.name}</button>
        </div>
    )
}

export default Button