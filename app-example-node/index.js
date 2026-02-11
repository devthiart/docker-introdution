const express = require('express')
let app = express();
const PORT = process.env.PORT;

app.use(express.static("."));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})