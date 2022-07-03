import User from "../model/User.js"
import  jwt  from "jsonwebtoken"
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export const signup = async(req,res) =>{
    const {firstName,lastName,email,password,confirmPassword,phno} = req.body
    console.log(firstName,lastName,email,phno,password,confirmPassword)
    try {
        const isExisingUser = await User.findOne({email})

        if(isExisingUser) return res.status(409).json({message:"User already exist! Please signin"})

        if(password!=confirmPassword) return res.status(401).json({message:"Passwords doesn't match"})

        const hashPassword = await bcrypt.hash(password,12)

        const user = await User.create({name:`${firstName} ${lastName}`,email,password:hashPassword,phno})

        const token = jwt.sign({email,id:user._id},process.env.AUTH_SIGN,{expiresIn:'1h'})

        res.status(200).json({result: user, token})

    } catch (error) {
        
        res.status(500).json({message: error})
    }
}

export const signin = async(req,res) =>{
    const {email, password} = req.body
    console.log(email,password)
    try {
        
        const existingUser = await User.findOne({email})

        if(!existingUser) return res.status(404).json({message: "User doesn't exist! Please create new user"})

        const isPwdCrt = await bcrypt.compare(password, existingUser.password)

        if(!isPwdCrt) return res.status(401).json({message: "Wrong Password"})

        const token = jwt.sign({email : existingUser.email,id: existingUser._id},process.env.AUTH_SIGN,{expiresIn:'1h'})

        res.status(200).json({result: existingUser,token})

    } catch (error) {

        res.status(500).json({message: error})
    }
}