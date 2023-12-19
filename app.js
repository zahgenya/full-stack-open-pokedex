const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 9050 // eslint-disable-line

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})
