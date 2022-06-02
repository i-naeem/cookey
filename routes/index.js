const express = require('express');
const Cookey = require('../services/Cookey')
const isValidUrl = require('../utils/isValidUrl');

const router = express.Router();


router.get('/api', async (req, res, next) => {

  if (req.query.url === undefined) {
    return res.json({
      "name": "Cookey",
      "description": "A rest api to fetch Javascript generated cookies from websites.",
      "router": {
        "/api": {
          "method": "GET",
          "args": {
            "url": {
              "type": "string",
              "required": true,
              "description": "Website url you want to get cookies for.",
            }
          }
        }
      }
    })
  }


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
