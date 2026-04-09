const express = require('express');
const server = express();
const path = require('path');

server.listen(3000);


server.use((req,res,next)=>{
    console.log('Servidor ligado');
    next();
})

server.use((req,res,next)=>{
    req.resquestTime=Date.now();
    next();
})

server.get('/',(req,res)=>{
    res.sendFile(__dirname,'views','home.html')
    console.log(req.resquestTime);
});

server.get('/aluno1',(req,res)=>{
    res.sendFile(__dirname,'views','aluno1.html')
});

server.get('/aluno2',(req,res)=>{
    res.sendFile(__dirname,'views','aluno2.html')
});

server.use((req,res)=>{
    res.sendFile(__dirname,'views','erro.html')
});