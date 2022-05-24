import { useState } from "react"
import Button from "../button/button"

const Contador = (props) => {
   
    const state = useState(0)
    
    const count = state[0]
    const setCount = state[1]

    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }
    
    return (
        <div style={{display: "flex", paddingLeft: '50px'}}> 

            <Button handleClick={decrement} label='-' color='red'/>
            <h1>{count}</h1>
            <Button handleClick={increment} label='+' color='green'/>

        </div>
    )
}

export default Contador