import React from "react";
import { useEffect,useState } from "react";
const Contact = () => {
  const [form,setForm]=useState({});
  const [users,setUsers]=useState([]);
  
const handleForm=(e)=>{
  
  setForm({
    ...form,
  [e.target.name]:e.target.value
  })
}

  
const handleSubmit= async (e)=>{
e.preventDefault();
  const response= await fetch('http://localhost:8080/',{
 // method linked with node.js server
   method:'POST',
   body:JSON.stringify(form),
   headers:{
    'Content-Type':'applictaion/json'
   }
  })
const data=await response.text();
console.log(data);
}

const getUsers=async()=>{
  const response= await fetch('http://localhost:8080/',{
  method:'GET',
   })
const data=await response.text();
setUsers(data);
}
useEffect(()=>{
  getUsers();
},[])


  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input type="text" name="Name" onChange={handleForm} required placeholder="Abc" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="Email" onChange={handleForm} required placeholder="Abc@xyz.com" />
          </div>
          <div>
            <label>Query</label>
            <input
              type="text"  name="Query" onChange={handleForm}
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
        <div>
          <ul>
            <li>
             {users.map(user=><li key={user._id}>{user.username},{user.email},{user.Query}</li>)}
            </li>
          </ul>
        </div>
      </main>
    </div>





  );
};

export default Contact;
