var client=require('./server')
client.connect()
client.query("INSERT INTO students VALUES(4,'revanth',4444444444,'reav@mail.com','reactjs')",(err,res)=>{    
    if (!err){
        console.log('data inserted')
    }
    client.end()
})