import React,{useState,useEffect}  from 'react'
import axios from 'axios'

function HookFetchSpecifi() {
    const[posts,setPosts]=useState({})
    const[id, setId]=useState(1)
    const[idFromButton, setIdFromButton]=useState(1)

    const add=()=>{
        setIdFromButton(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res=>{
            console.log(res.data)
            setPosts(res.data)
        })
        .catch((err)=>console.log(err.message))
        

    },[idFromButton])
    return (
        <div>
            {posts.title}
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            <button onClick={add}>Fetch post</button>
        </div>
    )
}

export default HookFetchSpecifi
