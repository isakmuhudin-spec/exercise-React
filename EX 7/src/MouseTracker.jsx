import { useEffect, useState } from "react"



const MouseTracKer = () => {

const [Cade , setCade] = useState({x:0 , y:0})

useEffect(()=>{
    const handleMose = ((e)=>{
        setCade ({ x:e.clientX, y: e.clientY });
    })

    window.addEventListener('mousemove'  , handleMose)

    return() =>{
        window.removeEventListener('mousemove', handleMose)

    }   
    
}, [])






return(
    <div>
        <p>Mouse X {Cade.x}</p>
        <p>Mouse Y {Cade.y}</p>
    </div>
)

}

export default MouseTracKer