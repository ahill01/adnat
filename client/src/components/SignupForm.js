import React, {useReducer, useState} from 'react'
import {useNavigate} from 'react-router-dom';

function SignupForm({setCurrentUser,handleLogin}) {
const [newUser, setNewUser] = useState({email:"",password:"",name:""})
const[confPassword,setConfPassword]=useState("")

function updateUser(e){
    setNewUser({...newUser,[e.target.name]:e.target.value})
}
function newUserLogin(user){
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email:user.email,password:user.password}) 
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

function createUser(e){
    e.preventDefault()
    if(confPassword===newUser.password&&newUser.password.length>=6){
        fetch(`/users`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(newUser => {
            setCurrentUser(newUser)

        })
    } else if(confPassword!==newUser.password) {
        alert("passwords do not match")
    } else if(newUser.password.length < 6) {alert("password needs to be 6 characters minumum")}
}

return(<div className="signup">
<h1>Sign Up For an Account</h1>
<form onSubmit={createUser}>
    <label htmlFor="email">Email</label>
    <input type="text" name="email" value={`${newUser.email}`} onChange={updateUser}></input>
    <br></br>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" value={`${newUser.name}`} onChange={updateUser}></input>
    <br></br>
    <label htmlFor="password">Password <em>(6 characters minimum)</em></label>
    <input type="password" name="password" value={`${newUser.password}`}onChange={updateUser}></input>
    <br></br>
    <label htmlFor="conf_password">Confirm Password</label>
    <input type="password" name="confPassword" value={`${confPassword}`}onChange={(e)=>setConfPassword(e.target.value)}></input>
    <br></br>
   <button type="submit">Create Account</button>
</form>
    <button>Log In</button>
</div>)
}
export default SignupForm;