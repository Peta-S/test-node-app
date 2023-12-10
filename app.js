import express from 'express'
const app = express()
const port = 4080

app.get('/', (req, res) => {
  res.send("Peta's Test Homepage")
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
