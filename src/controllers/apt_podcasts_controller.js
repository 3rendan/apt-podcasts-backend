const APTPodcasts = require('../models/aptPodcasts')

const create = async (req, res, next) => {
  const aptPodcastProps = req.body
  try {
    const aptPodcast = await Podcasts.create(aptPodcastProps)
    res.status(201).send(aptPodcast)
  } catch (e) {
    next()
  }
}
const getAptPodcasts = async (req, res, next) => {
  try {
    const aptPodcast = await APTPodcasts.find()
    res.status(200).send(aptPodcast)
  } catch (e) {
    next()
  }
}

const getById = async (req, res, next) => {
  const aptPodcastId = req.params.id
  try {
    const aptPodcast = await Podcasts.findById({ _id: aptPodcastId })
    res.status(200).send(aptPodcast)
  } catch (e) {
    next()
  }
}

const edit = async (req, res, next) => {
  const aptPodcastId = req.params.id
  const aptPodcastProps = req.body
  try {
    await Podcasts.findByIdAndUpdate({ _id: aptPodcastId }, aptPodcastProps)
    const aptPodcast = await Podcasts.findById({ _id: aptPodcastId })
    res.status(200).send(aptPodcast)
  } catch (e) {
    next()
  }
}

const deletePodcast = async (req, res, next) => {
  const aptPodcastId = req.params.id
  try {
    const aptPodcast = await Podcasts.findByIdAndRemove({ _id: aptPodcastId })
    res.status(204).send(aptPodcast)
  } catch (e) {
    next()
  }
}

const APTPodcastsController = {
  createAptPodcasts,
  getAptPodcasts,
  getById,
  editAptPodcasts,
  deleteAptPodcasts
}

module.exports = PodcastsController