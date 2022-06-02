const express = require('express');
const Cookey = require('../services/Cookey')

const router = express.Router();


router.get('/', async (req, res, next) => {
  const { url } = req.query;

  const r = await Cookey.getCookies(url);

  return res.json({ status: r })
})

module.exports = router;
