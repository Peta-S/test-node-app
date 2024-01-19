const express = require('express')
const port = 4080
const app = express()

app.get('/', (req, res) => {
  res.send("Peta's Test Homepage")
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
