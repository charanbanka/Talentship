import { Navigate, useNavigate } from 'react-router-dom'
import * as api from '../api/index'
import {  getReminderAction, getRemindersAction, postReminderAction } from '../features/reminder/Reminder'

// const navigate = useNavigate()

export const getReminder = (id,navigate) => async(dispatch)=>{
    try {
        const {data} = await api.getReminder(id)

        dispatch(getReminderAction(data))

        navigate('/home')
    } catch (error) {
        console.log(error)
    }
}

export const getReminders = () => async(dispatch)=>{
    try {
        const {data} = await api.getReminders()

        dispatch(getRemindersAction(data))

         //navigate('/home')
    } catch (error) {
        console.log(error)
    }
}

export const postReminder = (remindDetails,navigate) => async(dispatch)=>{
    try {
        const {data} = await api.postReminder(remindDetails)

        dispatch(postReminderAction(data))

        // navigate('/home')
    } catch (error) {
        console.log(error)
    }
}