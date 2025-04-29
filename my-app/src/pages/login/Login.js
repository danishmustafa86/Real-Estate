import {useState} from 'react'
import '../contact/Contact.css'


export default function Login() {
  const [message, setMessage] = useState('You are Login Successfully')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [contacts, setContacts] = useState([])

  const handleClick = ()=>{

    const contact = {
      message:message
    }
    setContacts([...contacts,contact])
  }


  return (
    <div className='contact-form'>
      <h1>Login Here</h1>

      <input type="text" onChange = {(e)=>setEmail(e.target.value)} placeholder='Enter email' />
      <br />

      <input type="text" onChange = {(e)=>setPassword(e.target.value)} placeholder='Enter password' />
      <br />
      <button onClick={handleClick} >Submit</button>

      {/* <h1>Your Data</h1> */}
      <ul className='contact-information'>
        {contacts.length === 0 ? (
          <li>Please Login</li>
        ):(
          <li>Status: {message}</li>
        )}

      
      </ul>
    </div>
    
  )
}

