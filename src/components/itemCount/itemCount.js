import { useState } from "react"


const ItemCount = (props) => {
   
    const [count, setCount] = useState(0)

    const decrement = () => {
            setCount((count) => count - 1)
        }

    const increment = () => {
        setCount(count + 1)
    }


    
    return (
        <div style={{display: "flex"}}> 

            <button handleClick={decrement} label='-' color='red'/>
            <h1>{count}</h1>
            <button handleClick={increment} label='+' color='green'/>

        </div>
    )
}

export default ItemCount