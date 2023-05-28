const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  slug: {
    type: String,
  },
})

module.exports = mongoose.model('Todo', TodoSchema)
