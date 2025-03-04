require("dotenv").config()

const express = require("express")

const app =express()

app.use(express.json())


const users = [

{email:"alice@example.com",password:"alice123"},
{email:"bob@example.com",password:"bob123"},
{email:"charlie@example.com",password:"charlie123"},
]


app.put("/user/:email",async(req,res)=>{
    try {
        const id = req.params.email
        const updateuser = await users.findByIDandUpdate(id,req.body,{new:true})
        if(!updateuser){
            res.status(404).json("Email not found")
        }
        res.status(200).json(updateuser)
    } catch (error) {
        res.status(400).json(error)
    }
   

})

app.delete("/user/:email",async(req,res)=>{
    try {
        const id = req.params.email
        const deleteuser = await users.findByIDandDelete(id)
        if(!deleteuser){
            res.status(404).json("Email not found")
        }
        res.status(200).json("User deleted sucessfully")
    } catch (error) {
        res.status(500).json(error)
    }
})

app.get("/",(req,res)=>{
    res.status(200).json({users})
    console.log("welcome!!This is my Ca")

})

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})