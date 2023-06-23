const express = require('express')
const viewsController = require('../controller/viewsController.js')

const router = express.Router();

router.get('/wave/:peerids', viewsController.getWavePage)
module.exports = router