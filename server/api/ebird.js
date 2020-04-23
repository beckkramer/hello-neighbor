
/*
Required request parameters

lat [-90.0-90.0] - decimal latitude, two decimal places of precision required
lng [-180.0-180.0] - decimal longitude, two decimal places of precision required

Optional request parameters

dist (25) [0-50] - distance defining radius of interest from given lat/lng in kilometers
back (14) [1-30] - the number of days back to look for observations
cat (all categories) [domestic|form|hybrid|intergrade|issf|slash|species|spuh] - useful for limiting results to certain taxonomic categories. Multiple categories may be comma-separated.
maxResults (no max) [1-10000] - the maximum number of result rows to return in this request; to get all results do not include this parameter
includeProvisional (false) [true|false] - set to true if you'd like flagged records that have not yet been reviewed to be included in the results
hotspot (false) [true|false] - set to true if results should be limited to sightings at birding hotspots
sort (date) [species|date] - to specify if results should be sorted taxonomically or by date

sppLocale (en) - locale to use for taxa common names
*/

const express = require('express');
const router = express.Router();
const axios = require('axios');


/* GET data by latitude/longitude */
router.get('/:geopoint', function(request, response) {

  const latitudeAndLongitude = request.params.geopoint.split(',')
  const location = `lat=${latitudeAndLongitude[0]}&lng=${latitudeAndLongitude[1]}`;
  const path = `https://api.ebird.org/v2/data/obs/geo/recent?${location}&sort=species`;


    const getBirds = async () => {
      try {
        return await axios.get(path, {
          headers: {
            'X-eBirdApiToken': process.env.EBIRD-API-KEY
          }
        })
      } catch (error) {
        response.status(500).send('There was an issue requesting birds at this location.')
      }
    }

    getBirds().then(result => {
      response.status(200).send(result.data)
    })
});

module.exports = router;