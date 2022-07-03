import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import remindSlice from "./reminder/Reminder"

export const store = configureStore({
    reducer:{
        user: userSlice,
        remind: remindSlice,
    }
})