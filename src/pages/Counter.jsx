import { useState } from "react"

export default function Counter() {
    
const [counter,setCounter] = useState(0)

function incrementCounter(){
    setCounter(prevCounter=>{
        return ++prevCounter
    })
}

 return (
    <>
        <div className="counter-page">
            <div className="counter-wrapper">
                    <h2>Counter Page</h2>

                    <button onClick={incrementCounter}>
                        { counter }
                    </button>
            </div>

        </div>
    </>
 )   
}