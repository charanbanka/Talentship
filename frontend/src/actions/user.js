import * as api from '../api/index'
import { usersignIn, usersignUp } from '../features/user/userSlice'

export const signIn = (userData,navigate)=> async(dispatch)=>{
    try {
        const {data} = await api.signIn(userData)
        // console.log(data)
        dispatch(usersignIn(data))
        // console.log(data)
        navigate('/home')
    } catch (error) {
        //console.log(data.message)
        console.log(error.message)
    }
}

export const signUp = (userData,navigate)=> async(dispatch)=>{
    try {
        const {data} = await api.signUp(userData)
        
        dispatch(usersignUp(data))
        // console.log(data)
        navigate('/home')
    } catch (error) {
        console.log(error.message)   
    }
}