import React, { useState } from 'react'
import "./renting.css"
import Footer from '../../components/footer';


export default function Renting() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: ""
  })

  const handleChange = (e) => (
    setFormData({ ...formData, [e.target.name]: e.target.value })
  )

  const [userData, setUserData] = useState([]);

  const [id, setId] = useState(1);

  const deleteUser = (id) => {
    setUserData((prevData) => prevData.filter((user) => user.id !== id));
  }

  const submitData = () => {
    if (formData.name && formData.email && formData.phone && formData.address) {
      const emailexist = userData.some((user) => user.email == formData.email)
      if (emailexist) {
        alert("This email is already in use. Please enter valid email")
      }
      else {
        const updatedFormData = { ...formData, id }
        setUserData([...userData, updatedFormData]);
        setId(id + 1);

        setFormData({
          id: "",
          name: "",
          email: "",
          phone: "",
          address: ""
        })
      }

    }
    else {
      alert("Please enter all feilds")
    }


  }

  return (
    <>
      <div className='mainrentingdiv'>
        <h1> Enter Your Detail Here</h1>
        <div className="inputInfo" >
          <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Enter you Name' />
          <br />
          <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Enter you Email' />
          <br />
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder='Enter you Phone Number' />
          <br />
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder='Enter you Address' />
          <br />

          <button className='buttonis' onClick={submitData}>Submit</button>
        </div>
        <div className='yourdata'>
          <h1>Your Data</h1>
          <table bolder="10" bgcolor='red' padding="10" cellSpacing="3">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <button className='buttonis' onClick={() => deleteUser(user.id)}>Delete</button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer style={{ marginTop: "150px", paddingTop:"150px" }} />
    </>
  )
}
