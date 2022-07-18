import React, {useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom';

function LoginPage({setCurrentUser,handleLogin}) {
const [credentials, setCredentials] = useState({email:"",password:""})
let navigate = useNavigate();

function handleLogin(e){
    e.preventDefault()
    fetch('/login', {
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
       if(user.no_orgs) {navigate('/join')} else navigate('/home')
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
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={`${credentials.email}`} onChange={updateCredentials}></input>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={`${credentials.password}`}onChange={updateCredentials}></input>
       <button type="submit">Log In</button>
   </form>
   <button onClick={() => navigate("/signup")}>Sign Up</button>
   <button>Forgot Your Password?</button>
</div>);
}
export default LoginPage;
