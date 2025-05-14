const fs= require("fs");//import fs (FileSystem)
const https= require("https");//for https to get data from URL
https.get("https://fakestoreapi.com/products",res=>{
    let data="";//Data Initialize 
    res.on('data',chuck=>{// a method used to listen for events on a response (res) object in Node.js.
        // res.on("eventName",callBack function)
        data+=chuck;
    })
    res.on('end',()=>{
        fs.writeFile("product.json",data,()=>{
            console.log("save to file: completed")
        })
    })
})