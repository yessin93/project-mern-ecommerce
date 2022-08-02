import React from 'react'
import {Button, Form} from 'react-bootstrap'
import{useDispatch, useSelector} from 'react-redux'
import { Navigate } from "react-router-dom";
import { useState } from 'react'
import { loginUser } from '../redux/action';
import'./SignIn.css'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {loading, users } = useSelector(state=>state.reducer)
  const dispatch = useDispatch()
  const handleSubmit = (e)=> {
    e.preventDefault();
    const newUser = {
      
      email,
      password
    }
    dispatch(loginUser(newUser))
  }
  return (
    <div className='container_sign'>
      <Form>
      {
        loading ? <h1>loading...</h1>
        :localStorage.getItem('token') ? <Navigate to="/profile"></Navigate>
        :
        <>

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
}

export default SignIn