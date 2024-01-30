const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
  <h2>Hi Class</h2>
  <h4>Let's have fun with Docker :-)</h4>
`)
})

app.listen(port, () => {
  console.log(`Listening on port 3000`)
})
