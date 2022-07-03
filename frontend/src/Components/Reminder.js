import { AppBar, Box, TextField, Toolbar } from '@mui/material'
import { Button, Container, Grid, Paper } from '@mui/material/node'
import Typography from '@mui/material/node/Typography'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postReminder } from '../actions/reminder'
import { getUserDetails } from '../features/user/userSlice'
import Input from './auth/Input'
import {TimeInput} from 'react-time-input'

const Reminder = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [formopen,setFormOpen] = useState(false)
    const initialRemindValues = {title:"",message:"",sendtime:"",userId:user?.result?._id,status:"pending"}
    const [senddate,setDate] = useState("")
    const [time,setTime] = useState("")
    const [remindValues,setRemindValues] = useState(initialRemindValues)
    const handleSubmit =(e)=>{
        e.preventDefault()
        var hours = time.split(":")[0];
        var minutes = time.split(":")[1];
        console.log(senddate,time)
        var date_ = new Date(senddate)
        console.log(date_)
        remindValues.sendtime = new Date(date_.getDate(),date_.getMonth(),date_.getFullYear(),hours,minutes,0,24)
        console.log(remindValues.sendtime)
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
         <Paper elevation={3}  className="d-flex flex-column align-items-center justify-content-center mt-5" style={{width:"350px"}}>
               <Typography variant='h6' color='primary'>Enter Details</Typography>
               <form className="p-2" onSubmit={handleSubmit}>
                   <Grid container spacing={1}>
                        <Input name="title" value={remindValues.name} label="Title" handleChange={handleChange} autoFocus />
                        <Input name="message" label="Message" value={remindValues.message} handleChange={handleChange}  />
                         <Grid container className="m-3" spacing={1}>
                            <Grid item>
                            <TextField variant="outlined" size="small"  value={senddate} name="date_" label="Send Date" type="date" onChange={(e)=>setDate(e.target.value)} onKeyPress={(e) => { remindValues.date.length === 5 && e.preventDefault(); }}/>
                            </Grid>
                            <Grid item >
                            <TextField variant='outlined' value={time} name ="time" size='small' label="Send Time" type="time" onChange={(e)=>setTime(e.target.value)}/>
                            </Grid>
                        </Grid>
                   </Grid>
                   <Button type="submit" className="m-2 w-75" variant='contained' color="primary" fullWidth >Create Reminder</Button>
               </form>
         </Paper>
     </Container>
    )}
   </div>
  )
}

export default Reminder