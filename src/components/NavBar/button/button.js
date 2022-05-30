const Button = (props) => {
    return <button style={{color: props.color}} onClick={props.onClick}>{props.label}</button>
}

export default Button