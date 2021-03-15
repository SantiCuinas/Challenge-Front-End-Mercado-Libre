const fetch = require("node-fetch");
var {
  formatSearchResponse,
  formatItemResponse,
} = require("../utils/responseFormatter");
var config = require("../config.json");

const searchItems = async (req, res) => {
  try {
    var response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=${config.resultLimit}`
    );
    res.send(await formatSearchResponse(await response.json()));
  } catch (error) {
    console.log(error);
  }
};

const getItem = async (req, res) => {
  try {
    var itemResponsePromise = await fetch(
      `https://api.mercadolibre.com/items/${req.params.id}`
    ).then((res) => {
      return res.json();
    });

    var descriptionResponsePromise = fetch(
      `https://api.mercadolibre.com/items/${req.params.id}/description`
    ).then((res) => {
      return res.json();
    });

    const response = await Promise.all([
      itemResponsePromise,
      descriptionResponsePromise,
    ]);

    res.send(await formatItemResponse(response[0], response[1]));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { searchItems, getItem };
