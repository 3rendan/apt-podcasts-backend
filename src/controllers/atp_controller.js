const Podcasts = require('../models/Podcasts')

const create = async (req, res, next) => {
  const podcastProps = req.body
  try {
    const podcast = await Podcasts.create(podcastProps)
    res.status(201).send(podcast)
  } catch (e) {
    next()
  }
}
const get = async (req, res, next) => {
  try {
    const podcast = await Podcasts.find()
    res.status(200).send(podcast)
  } catch (e) {
    next()
  }
}

const getById = async (req, res, next) => {
  const podcastId = req.params.id
  try {
    const podcast = await Podcasts.findById({ _id: podcastId })
    res.status(200).send(podcast)
  } catch (e) {
    next()
  }
}

const edit = async (req, res, next) => {
  const podcastId = req.params.id
  const podcastProps = req.body
  try {
    await Podcasts.findByIdAndUpdate({ _id: podcastId }, podcastProps)
    const podcast = await Podcasts.findById({ _id: podcastId })
    res.status(200).send(podcast)
  } catch (e) {
    next()
  }
}

const deletePodcast = async (req, res, next) => {
  const podcastId = req.params.id
  try {
    const podcast = await Podcasts.findByIdAndRemove({ _id: podcastId })
    res.status(204).send(podcast)
  } catch (e) {
    next()
  }
}

const PodcastsController = {
  create,
  get,
  getById,
  edit,
  deletePodcast
}

module.exports = PodcastsController