const fs = require('fs')
const path = require('path')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Podcasts = require('./src/models/podcasts')

const app = express()

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs', 'access.log'),
  { flags: 'a' }
)


app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.get('/podcasts', async (req, res) => {
  console.log('TRYING TO FETCH PODCASTS')
  try {
    const podcasts = await Podcasts.find()
    res.status(200).json({
      podcasts: podcasts.map((podcast) => ({
        id: podcast.id,
        title: podcast.title,
        category: podcast.category
      })),
    })
    console.log('FETCHED PODCASTS')
  } catch (err) {
    console.error('ERROR FETCHING PODCASTS')
    console.error(err.message)
    res.status(500).json({ message: 'Failed to load podcasts.' })
  }
})

app.post('/podcasts', async (req, res) => {
  console.log('TRYING TO STORE PODCAST')
  const podcastText = req.body.text

  if (!podcastText || podcastText.trim().length === 0) {
    console.log('INVALID INPUT - NO TEXT')
    return res.status(422).json({ message: 'Invalid podcast text.' })
  }

  const podcast = new Podcast({
    title: podcastTitle,
  })
  try {
    await podcast.save()
    res
      .status(201)
      .json({ message: 'Podcast saved', podcast: { id: podcast.id, title: podcastTitle } })
    console.log('STORED NEW PODCAST')
  } catch (err) {
    console.error('ERROR FETCHING PODCASTS')
    console.error(err.message)
    res.status(500).json({ message: 'Failed to save podcast.' })
  }
})

app.delete('/podcasts/:id', async (req, res) => {
  console.log('TRYING TO DELETE PODCAST')
  try {
    await Goal.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: 'Deleted podcast!' })
    console.log('DELETED PODCAST')
  } catch (err) {
    console.error('ERROR FETCHING PODCASTS')
    console.error(err.message)
    res.status(500).json({ message: 'Failed to delete podcast.' })
  }
})
mongoose.set('strictQuery', false)
mongoose.connect(
  'mongodb://mongodb:27017/podcasts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error('FAILED TO CONNECT TO MONGODB')
      console.error(err)
    } else {
      console.log('CONNECTED TO MONGODB')
      app.listen(8080)
    }
  }
)
