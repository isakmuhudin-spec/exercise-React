import { useState } from 'react';

const Counter = () => {

 const [Count , setCount] = useState(0)

 const Increment = () => setCount (Count + 1)

 const Decrement = () => {
   if(Count > 0) setCount(Count - 1)


}

return(
    <div>
        <h2>Count: {Count}</h2>
        <button onClick={Decrement} disabled={Count=== 0}>Decrement</button>

        <button onClick={Increment}> Increment</button>
    </div>
)
}

export default Counter
