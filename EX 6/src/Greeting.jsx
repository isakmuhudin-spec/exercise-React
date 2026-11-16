import { useState , useEffect } from "react"



const  Greeting = () => {

const [Name , setName] = useState("")
const [Greeting , setGreeting] = useState('Hello')


useEffect(()=>{
    if(!Name){
        document.title = "Welcome"
    } else{
        document.title = `${Greeting}, ${Name}`
    }
}, [Name ,Greeting])

return(
    <div>
        <h2>Enter your Name :</h2>
        <input type="name" value={Name}
        onChange={(e)=> setName(e.target.value)}/>


        <h2>Choose a Greeting</h2>
        <input type="text" value={Greeting}
        onChange={(e)=> setGreeting(e.target.value)} />
    </div>
)


}

export default Greeting