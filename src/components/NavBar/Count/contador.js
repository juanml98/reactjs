import { useState, useEffect } from "react"
import Button from "../button/button"

const Contador = (props) => {
   
    const [count, setCount] = useState(0)

    console.log(useEffect)

    useEffect(() => {
        console.log('Prueba')

        return () => {
            console.log('Prueba 3')
        }
    }, [])

    const decrement = () => {

        for(let i=0; i < 5; i++) {
            setCount((count) => count - 1)
        }

    }

    const increment = () => {
        setCount(count + 1)
    }

    console.log('prueba 2')
    
    return (
        <div style={{display: "flex"}}> 

            <Button handleClick={decrement} label='-' color='red'/>
            <h1>{count}</h1>
            <Button handleClick={increment} label='+' color='green'/>

        </div>
    )
}

export default Contador