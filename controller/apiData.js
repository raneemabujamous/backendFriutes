"use strict";

const axios = require("axios");
const ModuleApi = require("../module/Apimodulr");
const getApidata = async (req, res) => {
  const url = `https://flowers-api-13.herokuapp.com/getFlowers`;
  await axios.get(url).then((response) => {
    const apiData = response.data.flowerslist.map((item) => {
      return new ModuleApi(item);
    });
    res.send(apiData);
  });
};

module.exports = { getApidata };
