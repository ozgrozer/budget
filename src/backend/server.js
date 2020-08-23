const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 1200

require('dotenv').config()

const { PING } = process.env

app.set('trust proxy', 1)
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '..', 'frontend', 'html'))
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', '..', 'dist')))

app.listen(port, () => {
  console.log('Example app listening on port http://localhost:' + port)
})

const fakeTransactions = {
  '16 August': [
    { type: 1, category: 1, price: 100, date: '1597589648' },
    { type: 2, category: 2, price: 15.42, date: '1597589648' },
    { type: 2, category: 3, price: 25.42, date: '1597589648' }
  ],
  '15 August': [
    { type: 2, category: 4, price: 32.54, date: '1597589648' },
    { type: 2, category: 5, price: 85.23, date: '1597589648' },
    { type: 2, category: 6, price: 20.00, date: '1597589648' }
  ],
  '14 August': [
    { type: 2, category: 2, price: 20.00, date: '1597589648' },
    { type: 2, category: 3, price: 30.00, date: '1597589648' },
    { type: 2, category: 4, price: 40.00, date: '1597589648' },
    { type: 2, category: 5, price: 50.00, date: '1597589648' },
    { type: 2, category: 6, price: 60.00, date: '1597589648' },
    { type: 2, category: 7, price: 70.00, date: '1597589648' },
    { type: 2, category: 8, price: 80.00, date: '1597589648' },
    { type: 2, category: 9, price: 90.00, date: '1597589648' },
    { type: 2, category: 10, price: 100.00, date: '1597589648' },
    { type: 2, category: 11, price: 110.00, date: '1597589648' }
  ]
}

app.get('*', (req, res) => {
  res.render('app', {
    defaults: {
      PING,
      transactions: fakeTransactions
    }
  })
})
