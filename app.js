const express=require( "express")
const mongoose=require("mongoose")
const cors=require( "cors")
const jwt=require("jsonwebtoken")
const bcrypt=require( "bcrypt")
const loginmodel=require("./models/admin")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://ashna:ashna@cluster0.n9qo4.mongodb.net/rescueApp?retryWrites=true&w=majority&appName=Cluster0")

app.post("/signup",(req,res)=>{
    let input=req.body
    let hashedpassword=bcrypt.hashSync(input.password,10)
    input.password=hashedpassword
    let result=loginmodel(input)
    result.save()
    res.json({"status":"success"})
})




app.listen(8080,()=>{
    console.log("server started")
})