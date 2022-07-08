import React, {useState} from 'react'

function LoginPage({setCurrentUser,handleLogin}) {
const [credentials, setCredentials] = useState({email:"",password:""})

function handleLogin(e){
    e.preventDefault()
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({credentials}) 
   })
   .then(res=> {
    if(!res.ok) throw new Error(res.status);
    else return res.json();
   })
   .then((user) => {
       setCurrentUser(user)
    })
    .catch((error) =>{
        console.log('error: '+error)
    })
}

function updateCredentials(e){
    setCredentials({...credentials, [e.target.name]:e.target.value})
}


return (
<div className="login">
    <h1>Log In</h1>
   <form onSubmit={handleLogin}>
        <label for="email">Email</label>
        <input type="text" name="email" value={`${credentials.email}`} onChange={updateCredentials}></input>
        <label for="password">Password</label>
        <input type="password" name="password" value={`${credentials.password}`}onChange={updateCredentials}></input>
       <button type="submit">Log In</button>
   </form>
   <button >Sign Up</button>
   <button>Forgot Your Password?</button>
</div>);
}
export default LoginPage;
