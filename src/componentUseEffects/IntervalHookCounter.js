import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {
const [counter, setcounter] = useState(0)



useEffect(()=>{
    const tick=()=>{
        setcounter((prevCounter)=>prevCounter + 1)
    }
    const interval =setInterval(tick, 1000);

    return()=>{
        clearInterval(interval)
    }

})

    return (
        <div>
            <h1>{counter}</h1>
        </div>
    )
}

export default IntervalHookCounter