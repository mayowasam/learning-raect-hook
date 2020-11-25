import React,{useState} from 'react'



function HookCounterthree() {
    const [name, setName] = useState({ firstName: "", lastName: "" })

    const handleChange = (e) => {
        setName({
            ...name,
            firstName: e.target.value
        })

    }


    return (
        <div>
            <input type="text"
                value={name.firstName}
                onChange={handleChange}
                
            />
            <input
                type="text" value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })} />


            <h1>my name is {`${name.firstName} ${name.lastName}`}</h1>
        </div>
    )
}

export default HookCounterthree
