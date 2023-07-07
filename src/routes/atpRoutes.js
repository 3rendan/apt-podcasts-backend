const express = require('express')
const Trac = require('../models/TracModel')

const { 
    createPodcast,
    getPodcasts,
    getPodcast,
    deletePodcast,
    updatePodcast
 } = require('../controllers/tracsController')

const router = express.Router()

router.get('/', getPodcasts)
router.get('/:id', getPodcast)
// router.post('/', createPodcast)
// router.delete('/:id', deletePodcast)
// router.patch('/:id', updatePodcast)

module.exports = router