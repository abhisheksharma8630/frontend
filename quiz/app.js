const express = require('express');
const app = express();
const mysql = require('mysql2');
const path = require('path');
const methodoverride = require('method-override');
const {v4:uuidv4} = require('uuid');

app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));


app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abhi9760@',
    database: 'quiz_01'
})

app.get("/home",(req,res)=>{
    let q = "show tables;"
    // let q = "select table_schema as 'database',count(*) as 'tables' from information_schema.tables where table_type = 'BASE TABLE' group by table_schema";
    try{
       connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.render("index.ejs");
        })
    } catch(err) {
        console.log(err);
        res.send("Some error occured");
    }
})


// New Test

app.get("/home/new",(req,res)=>{
    let q = "SELECT * FROM TEST01;"
    try{
        connection.query(q,(err,result)=>{
             if(err) throw err;
             console.log(result);
             res.render("new.ejs",{result});
         })
     } catch(err) {
         console.log(err);
         res.send("Some error occured");
     }
})

// adding question
app.post("/home/new",(req,res)=>{
    let id = uuidv4();
    let {question} = req.body;
    console.log(question);
    let q = `INSERT INTO TEST01(id,ques) VALUES ('${id}','${question}');`;
    try{
        connection.query(q,(err,result)=>{
             if(err) throw err;
             console.log(result);
         })
     } catch(err) {
         console.log(err);
         res.send("Some error occured");
     }
    res.redirect("/home/new");
})

//delete a question
app.delete("/home/new/:id",(req,res)=>{
    let {id} = req.params;
    let q = `DELETE FROM TEST01 WHERE id = '${id}'`;
    try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        res.redirect("/home/new");
    })
    } catch(err) {
        console.log(err);
        res.send("Some error occured");
    }
})

app.listen(3000,()=>{
    console.log("App is listening through port 3000");
})