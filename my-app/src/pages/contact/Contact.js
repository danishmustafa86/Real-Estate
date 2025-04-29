import {useState} from 'react'
import './contact.css'
import Footer from '../../components/footer';


export default function Contact() {
  const [userName, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [contacts, setContacts] = useState([])

  const handleClick = ()=>{
    console.log('Name', userName)
    console.log('Email is ', email)
    console.log('Phone is ', phone)
    console.log('Password is ', password)
    const contact = {
      name:userName,
      email: email,
      password: password,
      phone: phone
    }
    setContacts([...contacts, contact])
  }


  return (
    <>
    <div className='contact-form'>
      <h1>Contact Form</h1>
      <input type="text" onChange = {(e)=>setName(e.target.value)} placeholder='Enter Name' />
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
        {contacts.length === 0 && <li>No Contact Available</li>}
        {contacts.map((contact,index)=>(
          <li key = {index}>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Password: {contact.password}</p>
            <p>Phone: {contact.phone}</p>
          </li>
        ))}
      </ul>
    </div>
      <Footer/>
      </>
    
  )
}


























// import React from 'react'
// import {useState} from 'react'
// // in react a component did render more than one time so that why userName will not change when we change its value
// export default function Contact() {
//   // const handleClick = (num1, num2) => {
//   //   // var userName = "John Doe";
//   //   // now we learn powerfull variable it will change its value on screen when we change its value
//   //   const [userName2, setUserName] = React.useState("John Doe")
//   //   console.log('Button Clicked',num1, num2)
//   // }
//   // const handleChange = (e) => {
//   //   console.log(e.target.value, "input changed")
//   //   // userName = e.target.value;
//   //   setUserName(e.target.value)
//   //   console.log(userName2, "user name")
//   // }
//   // console.log("Contact Page")




//   const [userName, setUserName] = useState("")
//   const [userEmail, setUserEmail] = useState("")
//   const [userPhone, setUserPhone] = useState("")
//   const [userMessage, setUserMessage] = useState("")
//   const [contact, setContact] = useState([])
//   const handleClick = () => {
//     console.log(userName, userEmail, userPhone, userMessage)
//   }
  

//   return (
//     <div>
//       <h1>Cpntact Form</h1>
//       <input type="text" onChange = {()=>userName(e.target.value)} placeholder = "enter Name" />
//       <br />
//       <input type="email" onChange = {()=>userEmail(e.target.value)} placeholder = "enter Email" />
//       <br />
//       <input
//         type="number"
//         onChange = {(e)=>userPhone(e.target.value)}
//         placeholder = "enter Phone"
//       />
//       <br />
//       <textarea
//         onChange = {(e)=>userMessage(e.target.value)}
//         placeholder = "enter Message"
//       />
//       <br />
//       <button onClick={()=>console.log(userName, userEmail, userPhone, userMessage)}>Submit</button>
//       <br />


//       <button className="Click"> Click Me</button>

//     </div>
//   )
// }









//       {/* <h1>React App</h1>
//       <input type="text" onChange={(e) => handleChange(e)} />
//       <h2>Hello {userName2}</h2>
//       <button onClick={() => handleClick(10, 20)}>Click Me</button> */}