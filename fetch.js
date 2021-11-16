var client=require('./server')
client.connect()
client.query("SELECT * FROM students",(err,res)=>{
    if (!err){
        console.log(res.rows)
    }
    client.end()
})