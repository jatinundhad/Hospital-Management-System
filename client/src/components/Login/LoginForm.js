import React from 'react'
import styles from './CSS/loginForm.module.css'
function LoginForm() {
  return (
    <>
    <div>
        <label htmlFor='PatientName'>Name*</label>
        <input type="text" id='PatientName' placeholder='i.e. Rahul'></input>
        <label htmlFor='Contact'>Contact No*</label>
        <input type="text" id='Contact' placeholder='i.e. 1234567890'></input>
        <label htmlFor='Email'>Email ID*</label>
        <input type="text" id='Email' placeholder='i.e. abc@domain.com'></input>
        <input type="submit"></input>
    </div>
    </>
  )
}

export default LoginForm

