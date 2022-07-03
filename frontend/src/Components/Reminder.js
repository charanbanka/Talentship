import { AppBar, Box, Toolbar } from '@mui/material'
import { Button, Container, Grid, Paper } from '@mui/material/node'
import Typography from '@mui/material/node/Typography'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postReminder } from '../actions/reminder'
import { getUserDetails } from '../features/user/userSlice'
import Input from './auth/Input'

const Reminder = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [formopen,setFormOpen] = useState(false)
    const initialRemindValues = {title:"",message:"",sendtime:"",userId:user?.result?._id,status:"pending"}
    const [remindValues,setRemindValues] = useState(initialRemindValues)
    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(postReminder(remindValues,navigate))
    }

    const handleChange = (e)=>{
        setRemindValues({...remindValues,[e.target.name]:e.target.value})
        
    }
  return (
   <div>
    <Button variant="outlined" onClick={()=>setFormOpen(!formopen)} >CreateReminder</Button>
    {formopen && (
         <Container component="main" maxWidth="xs">
         <Paper elevation={3}  className="d-flex flex-column align-items-center mt-5" style={{width:"350px"}}>
               <Typography variant='h6' color='primary'>Enter Details</Typography>
               <form className="p-2" onSubmit={handleSubmit}>
                   <Grid container spacing={1}>
                        <Input name="title" label="Title" handleChange={handleChange} autoFocus />
                        <Input name="message" label="Message" handleChange={handleChange}  />
                        <Input  name="sendtime" label="SendTime(00:00)24hrs" handleChange={handleChange} onKeyPress={(e) => { remindValues.sendtime.length === 5 && e.preventDefault(); }} />
                   </Grid>
                   <Button type="submit" className="m-4 w-75" variant='contained' color="primary" fullWidth >Create Reminder</Button>
               </form>
         </Paper>
     </Container>
    )}
   </div>
  )
}

export default Reminder