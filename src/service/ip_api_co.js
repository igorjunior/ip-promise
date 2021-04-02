'use strict'
const https = require('https');
const axios = require('axios');

const api = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

function parseResponse (response) {
  if (!response.data) {
    throw new Error('Erro ao geolocalizar ip.')
  }
  if (!response.data.country_code || !response.data.region_code || !response.data.city) {
    throw new Error('Erro ao geolocalizar ip.')
  }
  return {
    city: response.data.city,
    state: response.data.region_code,
    country: response.data.country_code
  }
}

function parseError(error) {
  if (error.response) {
    throw new Error(error.response)
  } else if (error.request) {
    throw new Error(error.request)
  } else {
    throw new Error(error.message)
  }
}

module.exports = (ip) =>  {
  return api.get(`https://ipapi.co/${ip}/json/`)
  .then(parseResponse)
  .catch(parseError);
}
