const { Schema, model } = require('mongoose')

const APTPodcastsSchema = new Schema({
  name : {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: false
  },
  image:{
    alt: {
      type: String
    },
    url: {
      type: String
    }
  },
  produced: {
    type: Boolean,
  },
  distributed: {
    type: Boolean,
  }
})
const APTPodcasts = model('aptPodcasts', APTPodcastsSchema)
module.exports = APTPodcasts