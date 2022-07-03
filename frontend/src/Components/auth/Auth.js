import React, { useState } from 'react'
import {Avatar, Button, Container, Grid, Link, Paper, Typography} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch } from 'react-redux';
import {Link as LinkR} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import { signIn, signUp } from '../../actions/user';

const Auth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('profile'))
    const initialValues = {firstName:"",lastName:"",email:"",password:"",confirmPassword:"",phno:""}
    const [signup,setSignUp] = useState(false)
    const [showpwd,setShowpwd] = useState(false)
    const [formData,setFormData] = useState(initialValues)
    const handleShowPassword = ()=>{
        setShowpwd(!showpwd)
    }
    const switchMode = ()=>{
        setSignUp(!signup)
        setShowpwd(false)
    }
    var error=""
    const handleSubmit=(e)=>{
        e.preventDefault()
            if(signup)
                dispatch(signUp(formData,navigate))
            else
                dispatch(signIn(formData,navigate))
            setFormData(initialValues)
    }
    
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    
  return (
      <Container component="main" maxWidth="xs">
          <Paper elevation={3}  className="d-flex flex-column align-items-center mt-5" style={{width:"350px"}}>
                <Avatar className="bg-danger m-1">
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h6' color='primary'>{signup?"Sign Up":"Sign In"}</Typography>
                <form className="p-2" onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                        {
                            signup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus />
                                     <Input name="lastName" label="Last Name" handleChange={handleChange}  />
                                </>
                             )
                        }
                        <Input  name="email" label="Email" handleChange={handleChange} type="email"  />
                        <Input name="password" label="Password" handleChange={handleChange}  type={showpwd?'text':'password'} handleShowPassword={handleShowPassword } />
                        {signup &&(
                            <>
                                <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange}  type="password" />
                                <Input name="phno" label="phone no" handleChange={handleChange}  type="number" />
                            </>
                        )}
                    </Grid>
                    <Button type="submit" className="m-4 w-75" variant='contained' color="primary" fullWidth >{signup?"Sign Up":"Sign In"}</Button>
                   
                     <Grid container justifyContent='center' style={{marginTop:"10px"}}>
                        <Grid item >
                            {!signup &&
                                <Link component={LinkR} to="/auth/forgot" color='secondary' underline="hover" className="d-flex justify-content-end" >Forgot Password</Link>
                            }
                            <div className="d-flex align-items-center mt-1">
                                <Typography variant='body2' color='inherit'>{signup? 'Already have an account? ':"Don't have an account? "}</Typography>
                                <Button onClick={switchMode} color="secondary" >
                                    {signup? 'Sign In':"Sign Up"}
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
          </Paper>
      </Container>
   
  )
}

export default Auth