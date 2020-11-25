import React,{useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
const [display, setdisplay] = useState(true)




    return (
        <div>
            <button onClick={()=>setdisplay((prevDisplay)=>!prevDisplay)}>Toggle display</button>
            {display ? <HookMouse/>:<h1> i am not displaying</h1>}
        </div>
    )
}

export default MouseContainer