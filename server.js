var {Client}=require('pg')
var client= new Client({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'Revanth@324',
    database:'online_vidya'
})
 module.exports=client

