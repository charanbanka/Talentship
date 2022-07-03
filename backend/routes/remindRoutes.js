import express from 'express'
import { deleteRemind, getReminder, getReminders, sendRemind, updateRemind } from '../controller/remindController.js'

const router = express.Router()

router.get('/',getReminders)
router.get('/:id',getReminder)
router.post('/',sendRemind)
router.patch('/:id',updateRemind)
router.delete('/:id',deleteRemind)


export default router