const express = require("express")
const app = express()

const port = 4500;
const PopularCars = ["Ferrari" , "Rolls Royce","Bentley"]
const FastCars = ["Hellcat" , "Corvette" , "Red Eye"]
const trucks = ["Ford", "Chevrolet", "Cadillac"]
app.get('/home',(req,res)=>{
    res.send(`
        <p>welcome to our website , you are in ${req.url} </p>
        <a href="/Home> Description</a>


        `)
})



app.get("/Popular-cars",(req,res)=>{
    res.send(`
        <p>Welcome to our website , you are in ${req.url}</p>
        ${PopularCars}    `)

})

app.get("/fast-cars" ,(req,res)=>{
    res.send(`<p>welcome to our collection of fast cars </p>
        ${FastCars}`)
})
app.get('/trucks',(req,res)=>{
res.send(`<p>Welcome to our collection of trucks </p>
${trucks} 
`)
})

app.listen(port,()=>{
    console.log(`server started on port ${port}`);
    console.log(`http://localhost:${port}`);
})
