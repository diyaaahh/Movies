const express=require("express")
const{
    createPool
} = require('mysql2');

const pool =createPool({
    host :"localhost",
    user :"root",
    password :"diya1234@",
    database:"movies1",
    connectionLimit:20
})
pool.query('select * from userinfo', (err, result, fields)=>
    {if(err){
        return console.log(err);
    }
    return console.log(result);
})
module.export = pool;