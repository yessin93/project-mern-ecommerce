import React from 'react'
import { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import { registerUser } from '../redux/action'
import'./signup.css'
import{useDispatch, useSelector} from 'react-redux'
import { Navigate } from "react-router-dom";


const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {loading, users} = useSelector(state=>state.reducer)
    const dispatch = useDispatch()
    const handleSubmit = (e)=> {
      e.preventDefault();
      const newUser = {
        name,
        email,
        password
      }
      dispatch(registerUser(newUser))
    }
  return (
    <div className='container'>
      <Form >
      {
        loading ? <h1>loading...</h1>
        : users ? <Navigate to ="/SignUp"></Navigate>
        :
      
      <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Button onClick={handleSubmit}>Submit</Button>
      </>
      }
     </Form>
   
     
    </div>
  )
  
};

export default SignUp