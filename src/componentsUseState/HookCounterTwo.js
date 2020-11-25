import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount =0
const [count, setCount] =useState(initialCount)

    return (
        <div>
            count: {count}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>increase</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>decrease</button>
            <button onClick={()=>setCount(prevCount => prevCount + 5)}> 5 + increase</button>
            <button onClick={()=>setCount(prevCount => prevCount - 5)}>5 - decrease</button>
            <button onClick={()=>setCount(count - 5)}>normal 5 - decrease</button>
            <button onClick={()=>setCount(count + 5)}>normal 5 + increase</button>



        </div>
    )
}

export default HookCounterTwo
