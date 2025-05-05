const express = require('express')
const app = express()
const port = 3000

app.get('/contact us', (req, res) => {
  res.send('This is contact us page')
})


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => {
  console.log(`api is listening on port ${port}`)
})