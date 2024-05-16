const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) =>{
  res.send("hello node js")
})

app.listen(port, () => {
  console.log(`app listening in this port ${port}`)
})