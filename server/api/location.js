const express = require('express');
const router = express.Router();
const allZipcodes = require('../data/zipcode-data.json');

/* GET data by zipcode match */
router.get('/:zip', function(request, response, next) {

  let zipcodeData = {};

  if (request.params.zip) {

    const zipcode = request.params.zip;

    zipcodeData = allZipcodes.filter((entry) => {
      return String(entry.Zipcode).includes(zipcode);
    });
  }

  response.status(200).json(zipcodeData);
});

module.exports = router;