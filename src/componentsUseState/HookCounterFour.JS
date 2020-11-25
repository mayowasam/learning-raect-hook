import React,{useState} from 'react'

function HookCounterFour() {
const [items, setItem]= useState([])
console.log (items)

    const addItem = () => {
        setItem([
           ...items,
            {
                id: items.length,
                value:Math.floor(Math.random()  * 10) +1 
                
            }
        ])
     
    }
    return (
        
        <div>
            <button onClick={addItem}>adds new item</button>
            <ul>
             {items.map((item)=><li key={item.id}>{item.value}</li>)}
            </ul>
        </div>
    )
}
export default HookCounterFour