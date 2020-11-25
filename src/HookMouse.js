import React,{useState,useEffect} from 'react'


function HookMouse() {
    const[x, setX] =useState(0)
    const[y,setY]= useState(0)

    const logMousePos=(e)=>{
        console.log('mouseevent')
        setX(e.clientX)
        setY(e.clientY)
    }

useEffect(()=>{
    console.log('useEffect used')
    window.addEventListener('mousemove', logMousePos)

    return () =>{
        console.log('unmounting event')
        window.removeEventListener('mousemove',logMousePos)
    }
},[])



    return (
        <div>
            x ={x} , y ={y}
        </div>
    )
}

export default HookMouse