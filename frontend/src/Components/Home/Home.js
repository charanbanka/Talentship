import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReminders } from '../../actions/reminder'
import { getAllReminderDetails} from '../../features/reminder/Reminder'
import Navbar from '../Navbar'
import Reminder from '../Reminder'

const Home = () => {
    const dispatch = useDispatch()
    const reminder = useSelector(getAllReminderDetails)
    console.log(reminder)
    useEffect(()=>{
        dispatch(getReminders())
    },[])
  return (
    <div>
        <Navbar/>
        <Box sx={{ flexGrow: 1 }} className="m-3">
            <Reminder/>
        </Box>
        <div></div>
    </div>
  )
}

export default Home