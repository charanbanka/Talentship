import axios from 'axios';

const API = axios.create({baseURL:"http://localhost:8080"})
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.autherization= `loveyou ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})


export const signIn = (userData)=>API.post('/auth/signin',userData)
export const signUp = (userData)=>API.post('/auth/signup',userData)

export const getReminder = (id) => API.get(`/remind/${id}`)
export const getReminders = () => API.get('/remind')
export const postReminder = (remindDetails) => API.post('/remind',remindDetails)
export const updateReminder = (id,remindDetails) => API.patch(`/remind/${id}`,remindDetails)
export const deleteReminder = (id) => API.delete(`/remind/${id}`)
