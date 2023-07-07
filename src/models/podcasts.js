const { Schema, model } = require('mongoose')

const PodcastsSchema = new Schema({
  title : {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: false
  },
  produced: {
    type: Boolean,
    default: false
  }
})
const Podcasts = model('podcasts', PodcastsSchema)
module.exports = Podcasts