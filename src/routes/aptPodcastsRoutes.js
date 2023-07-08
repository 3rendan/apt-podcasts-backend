const express = require('express')
const APTPodcasts = require('../models/aptPodcasts')

const { 
    createAptPodcasts,
    getAPTPodcasts,
    getById,
    editAptPodcasts,
    deleteAptPodcasts
 } = require('../controllers/apt_podcasts_controller')

const router = express.Router()

router.get('/', getAPTPodcasts)
router.get('/:id', getById)
// router.post('/', createAPTPodcast)
// router.delete('/:id', deleteAPTPodcast)
// router.patch('/:id', updateAPTPodcast)

module.exports = router