const express= require("express");
const axios= require("axios");
const app= express();
const port= process.env.PORT || 3000;
app.get("/products/1",async(req,resp)=>{
    try{
        const response= await axios.get("https://fakestoreapi.com");
        resp.json(response.data);
    }
    catch(error){
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });