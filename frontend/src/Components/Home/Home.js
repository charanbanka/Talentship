import { Box, TableCell } from '@mui/material'
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material/node'
import Typography from '@mui/material/node/Typography'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReminders } from '../../actions/reminder'
import { getAllReminderDetails} from '../../features/reminder/Reminder'
import Navbar from '../Navbar'
import Reminder from '../Reminder'

const Home = () => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    useEffect(()=>{
        dispatch(getReminders())
    },[])
    const reminders = useSelector(getAllReminderDetails)
    console.log(reminders)
    const [userReminders,setUserReminders] = useState([])
    useEffect(()=>{
        setUserReminders(reminders.filter((reminder)=>reminder?.userId === user?.result?._id))
        console.log(userReminders)
    },[reminders])

  return (
    <div>
        <Navbar/>
        <Box sx={{ flexGrow: 1 }} className="m-3">
            <Reminder/>
        </Box>
        <Box sx={{ flexGrow: 1 }} className="m-3">
            <Typography>Your Reminders</Typography>
            <TableContainer  className='overflow-auto' style={{maxHeight:"330px"}} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Message</TableCell>
                        <TableCell align="right">SendTime</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align='right'></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {userReminders?.map((reminder) => (
                        <TableRow
                        key={reminder._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="reminder">
                            {reminder.title}
                        </TableCell>
                        <TableCell align="right">{reminder.message}</TableCell>
                        <TableCell align="right">{reminder.sendtime}</TableCell>
                        <TableCell align="right">{reminder.status}</TableCell>
                        {/* <TableCell align='right' onClick={()=>{setOverlay(true); setCartItem(reminder)}} style={{cursor:"pointer"}}>
                            <MdDelete/>
                        </TableCell> */}
                        </TableRow>
                    ))}
                    {/* {cart.length>0 && (
                    <div className='d-flex flex-column justify-content-center align-items-center footer-copyright' style={{left:"2rem",bottom:"3rem",position:"absolute"}} >
                        <h5 className='text-dark text-align-center'>Total Amount: ${totalCost}</h5>
                        <button onClick={()=>navigate('/delivery')} className='btn btn-primary m-2' style={{width:"300px"}}>Proceed</button>
                    </div>
                    )} */}
                    </TableBody>
                </Table>
                </TableContainer>
        </Box>
    </div>
  )
}

export default Home