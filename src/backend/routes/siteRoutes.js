const path = require('path')
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const rateLimit = require('express-rate-limit')

const defaults = require.main.require('./defaults')

const router = express.Router()
router.use(express.json())
router.use(express.static(path.join(__dirname, '..', '..', '..', 'dist')))
router.use(session({
  resave: true,
  collection: 'session',
  saveUninitialized: false,
  key: defaults.site.name,
  secret: defaults.site.sessionSecret,
  store: new MongoStore({
    useUnifiedTopology: true,
    url: defaults.db.address
  }),
  cookie: { maxAge: 2592000000 }/* 30 days (30 * 24 * 60 * 60 * 1000) */
}))

const limiter = rateLimit({
  windowMs: defaults.rateLimit.time,
  max: defaults.rateLimit.max,
  message: {
    success: false,
    error: 'Too many requests'
  }
})

router.get('*', [limiter], require('./siteRoutes/all'))

module.exports = router
