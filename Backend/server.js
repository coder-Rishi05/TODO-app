import express from "express";

const app = express();

const route = '/api/notes';

app.get(route,(req,res)=>{
  
    res.send('you got 5 notes !')
    
})




const port = 5000;


app.listen(port, () => {
  console.log("listning on port : ", port);
  console.log("http://localhost:5000"+route);
});
