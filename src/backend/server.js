const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 1200

app.set('trust proxy', 1)
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '..', 'frontend', 'html'))
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', '..', 'dist')))

app.listen(port, () => {
  console.log('Example app listening on port http://localhost:' + port)
})

app.get('*', (req, res) => {
  res.render('app')
})
