import Remind from "../model/Remind.js"
import mongoose from "mongoose"

export const getReminders = async(req, res) =>{
    try {
        const reminders = await Remind.find()


        res.status(200).json(reminders)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

export const getReminder = async(req, res) =>{
    const {id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Reminder with this id: ${id}`);

        const reminder = await Remind.findById(id)
        console.log(reminder.sendtime)

        res.status(200).json(reminder)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

export const sendRemind = async(req, res) =>{
    const reminderData = req.body 
    console.log(reminderData)
    const reminder = new Remind({...reminderData})
    try {
        await reminder.save()

        res.status(200).json(reminder)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

export const updateRemind = async(req, res) =>{
    const {id} = req.params;
    const reminderUpdate = req.body
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Reminder with this id: ${id}`);

        const reminder = await Remind.findByIdAndUpdate(id,reminderUpdate,{new: true})

        res.status(200).json(reminder)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

export const deleteRemind = async(req, res) =>{
    const {id} = req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Reminder with this id: ${id}`);

        await Remind.findByIdAndRemove(id)

        res.status(200).json({message: "Successfully deleted"})
    } catch (error) {
        res.status(500).json({message:error})
    }
}