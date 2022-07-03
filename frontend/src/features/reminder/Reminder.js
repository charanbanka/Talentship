import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reminder:{},
    reminders:[],
}

const remindSlice = createSlice({
    name: 'remind',
    initialState,
    reducers: {
        getRemindersAction: (state,{payload})=>{
            state.reminders = payload
        },
        getReminderAction: (state,{payload})=>{
            state.reminder = payload
        },
        postReminderAction: (state,{payload})=>{
            state.reminders = {...state.reminders,payload}
        },
        
    },
})

export const {getRemindersAction,getReminderAction,postReminderAction} = remindSlice.actions;
export const getReminderDetails = (state) => state.remind.reminder;
export const getAllReminderDetails = (state) => state.remind.reminders;
export default remindSlice.reducer