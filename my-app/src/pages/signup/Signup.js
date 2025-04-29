import {useState} from 'react'
import '../contact/Contact.css'


export default function SignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [contacts, setContacts] = useState([])

  const handleClick = ()=>{
    console.log('First Name', firstName)
    console.log('Last Name', lastName)
    console.log('Email is ', email)
    console.log('Phone is ', phone)
    console.log('Password is ', password)
    const contact = {
      firstName: firstName,
      lastname: lastName,
      email: email,
      password: password,
      phone: phone
    }
    setContacts([...contacts, contact])
  }


  return (
    <div className='contact-form'>
      <h1>Sign Up</h1>
      <input type="text" onChange = {(e)=>setFirstName(e.target.value)} placeholder='Enter First Name' />
      <br />
      <input type="text" onChange = {(e)=>setLastName(e.target.value)} placeholder='Enter Last Name' />
      <br />
      <input type="text" onChange = {(e)=>setEmail(e.target.value)} placeholder='Enter email' />
      <br />
      <input type="text" onChange = {(e)=>setPhone(e.target.value)} placeholder='Enter phone' />
      <br />
      <input type="text" onChange = {(e)=>setPassword(e.target.value)} placeholder='Enter password' />
      <br />
      <button onClick={handleClick} >Submit</button>

      <h1>Your Data</h1>
      <ul className='contact-information'>
        {contacts.length === 0 && <li>No Sign Data Upvailable</li>}
        {contacts.map((contact,index)=>(
          <li key = {index}>
            <p>First Name: {contact.firstName}</p>
            <p>Last Name: {contact.lastName}</p>
            <p>Email: {contact.email}</p>
            <p>Password: {contact.password}</p>
            <p>Phone: {contact.phone}</p>
          </li>
        ))}
      </ul>
    </div>
    
  )
}














