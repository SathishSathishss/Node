const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql2');
const app=express();
const port=3000;

app.use(bodyParser.json());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'employee',
    port:3306
});

db.connect((err)=>{
    if(err){
        console.err("DB connection Error",err);
    }else{
        console.log("DB connected "+db.threadId);
    }
});
//post data;
app.post("/addEmploye",(req,res)=>{
    const {name,salary,gender} = req.body;

db.query("insert into employees (name,salary,gender) value (?,?,?)",
[name,salary,gender],(error,results,field)=>{
    if (error){
        console.error("error showing while insert data",error.stack);
        res.status(500).send("error statment");
    }
    else {
        console.log("Data added");
        res.status(200).send("send successfully");
    }
  });    
});
//get all;
app.get("/getAll", (req,res)=>{
  
    db.query("select * from employees", (error,results,fields)=>{
        if(error) {
            console.error("error statement", error.stack);
            res.status(500).send("error");
        }
        else {
            console.log("Get data Successfully");
            res.status(200).send(results);
        }
    });
});
//get by id;
app.get("/getById/:id",(req,res)=>{
    const {id}=req.params;
    
    db.query("select * from employees where id=?",
    [id],(error,results,fields)=>{
        if (error) {
            console.error(error.stack);
            res.status(500).send("error");
        }
        else {
            console.log("get by id successfully");
            res.status(200).send(results);
        }
    });
});
//get by name;
app.get("/getByName/:name",(req,res)=>{
    const {name}=req.params;
    
    db.query("select * from employees where name=?",
    [name],(error,results,fields)=>{
        if (error) {
            console.error(error.stack);
            res.status(500).send("error");
        }
        else {
            console.log("get by name successfully");
            res.status(200).send(results);
        }
    });
});
//deleteBYId;
app.get("/deleteById/:id",(req,res)=>{
    const {id}=req.params;
    
    db.query("delete from employees where id=?",
    [id],(error,results,fields)=>{
        if (error) {
            console.error(error.stack);
            res.status(500).send("error");
        }
        else {
            console.log("get by id successfully");
            res.status(200).send(results);
        }
    });
});
//update
app.put("/updateById/:id",(req,res)=>{
    const {id}=req.params;
    const empl=req.body;

    //const {name,salary,gender}=req.body 
    //db.query("update employees name=?,salary=?, gender=? where id=?"),
    //[name,salary,gender,id],(error,results,fields)=>


    db.query("update employees set ? where id=?",
    [empl,id],(error,results,fields)=>{
        if (error) {
            console.error(error.stack);
            res.status(500).send("error");
        }
        else {
            console.log("update by id successfully");
            res.status(200).send(req.body);
        }
    });
});
app.listen(port, ()=>{
 console.log(`application connected ${port}`);
});