import React,{useState, useEffect} from 'react'

function HookCountsOne() {
    const [count, setCount]= useState(0)
    const [name,setName]= useState("")

useEffect(() => {
    document.title=`${count}`
    console.log(document.title )
    console.log("updating component")
    
},[count])




    return (
        <div>
            <h1>count:{count}</h1>
            <button onClick={()=>setCount(count +1)}>setting counts</button>
            <br/>

            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  />
        </div>
    )
}

export default HookCountsOne