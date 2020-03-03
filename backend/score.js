require('dotenv').config();
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true })
    .then(result => {
        console.log('connected to MongoDB successfully!')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB', error.message)
    })
mongoose.set('useFindAndModify', false)
const scoreSchema = new mongoose.Schema({
    name: String,
    score: String
  })

  scoreSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  scoreSchema.plugin(uniqueValidator);
  module.exports = mongoose.model('Score', scoreSchema)