const express = require("express");//import express 
const app = express();//import express
const PORT= process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Hello, World');
});
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})