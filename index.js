require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/index')

const PORT = process.env.PORT || 8000
const app = express()

async function init() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)

    app.set('view engine', 'ejs')
    app.use(express.urlencoded({ extended: false }))
    app.use(express.static('public'))

    // routes
    app.use('/', routes)

    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`)
    })
  } catch (err) {
    return err
  }
}

init().catch((err) => {
  console.log(err)
})
