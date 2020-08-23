const path = require('path')
const express = require('express')
const rateLimit = require('express-rate-limit')

const defaults = require.main.require('./defaults')

const router = express.Router()
router.use(express.json())
router.use(express.static(path.join(__dirname, '..', '..', '..', 'dist')))

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
