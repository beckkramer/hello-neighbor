const express = require('express');
const router = express.Router();

// Data from https://public.opendatasoft.com/explore/dataset/us-zip-code-latitude-and-longitude
// Dataset Identifier: us-zip-code-latitude-and-longitude
// Record ID:: 6a0a9c66f8e0292a54c9f023c93732f1b41d8943
const allZipcodes = require('../data/us-zip-code-latitude-and-longitude.json');

/* GET data by zipcode match */
router.get('/:zip', function(request, response, next) {

  let zipcodeData;

  if (request.params.zip) {

    const zipcode = request.params.zip;

    zipcodeData = allZipcodes.filter((entry) => {
      return String(entry.fields.zip).includes(zipcode);
    });
  }

  if (zipcodeData) {
    response.status(200).json(zipcodeData[0].fields);
  } else {
    response.status(400).send('Zipcode not found.');
  }
});

module.exports = router;