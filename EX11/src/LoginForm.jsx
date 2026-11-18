import { useState } from "react";



const LoginBasic = ()=>{

 const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleIsak = ()=>{
    event.preventDefault()

    if(username && password){
        setIsLoggedIn(true)
    }

}

const handleCade = ()=>{
    setUsername('')
    setPassword('')
    setIsLoggedIn(false)
}

if(isLoggedIn){
    return(
        <div>
            <h1>Welcome , {username}</h1>
            <button onClick={handleCade}>Logout</button>
        </div>
    )
}

return (
    <form onSubmit={handleIsak}>
      <h2>Login</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginBasic;