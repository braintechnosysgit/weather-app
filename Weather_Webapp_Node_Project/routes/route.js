const express = require('express');
const router = express.Router();
const Controller = require('../controller/controller');

const controller = new Controller();

router.post('/getLocation',controller.locationAPi);


module.exports = router;
