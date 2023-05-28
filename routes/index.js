const express = require('express')
const todoRoutes = require('./todo.routes')
const router = express.Router()

router.use('/todos', todoRoutes)

router.get('/', async (req, res) => {
  res.render('index.ejs')
})

module.exports = router
