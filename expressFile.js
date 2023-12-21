const fs = require ("fs");
const express = require ("express");
const app = express();

app.use(express.json());

const port = 3000;

app.post('/storedData',(req,res)=>{
console.log(req.body);
const data = req.body.data;

fs.appendFile('./temp.txt',data,(err)=>{

    if (err) {
        console.error("This file showing error");
        res.status(500).send("error while appending");
    }
    else {
        console.log("the file success fully saved");
        res.status(200).send("file saved into temp.text");
    }
  });
});
app.get('/getData',(req,res)=>{
    
fs.readFile('./temp.txt',(err,data)=>{

    if (err) {
        console.error("error");
        res.status(500).send("invalid data");
        }
    else {
        console.log("new data is saved");
        res.status(200).send(data.toString());
        }
    });
});

app.delete('/delete',(req,res)=>{

fs.unlink('./temp.txt',(err)=>{

    if (err) {
        console.log("error");
        res.status(500).send("delete data");
    }
    else {
        
        res.status(200).send("Data is deleted success fully");
    }
});    
});

app.listen(port,()=>{
 console.log(`this application runs on ${port}`);
});