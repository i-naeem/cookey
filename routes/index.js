const express = require('express');
const Cookey = require('../services/Cookey')
const isValidUrl = require('../utils/isValidUrl');

const router = express.Router();


router.get('/', async (req, res, next) => {

  if (!isValidUrl(req.query.url)) {

    return res.status(422).json({
      status: "FAILED",
      message: "Invalid Url"
    })
  }

  try {
    const response = await Cookey.getCookies(req.query.url);
    return res.json(response);

  } catch (error) {
    next(error);
  }
})

module.exports = router;
