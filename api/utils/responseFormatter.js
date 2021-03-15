var config = require("../config.json");

const formatSearchResponse = async (rawResponse) => {
  var response = {
    author: {
      name: config.author.name,
      lastname: config.author.lastname,
    },
    categories: [],
    items: [],
  };

  response.items = rawResponse.results.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.prices?.presentation?.display_currency,
        amount: item.price,
        decimals: getDecimals(item.price),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping?.free_shipping,
      location: item.address?.state_name,
    };
  });

  const categories = await rawResponse.filters.find(
    (filter) => filter.id === "category"
  );

  response.categories = categories?.values[0].path_from_root.map((category) => {
    return category.name;
  });

  return response;
};

const formatItemResponse = async (item, description) => {
  var response = {
    author: {
      name: config.author.name,
      lastname: config.author.lastname,
    },
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: getDecimals(item.price),
      },
      picture: item.pictures[0].url,
      condition: item.condition,
      free_shipping: item.shipping?.free_shipping,
      sold_quantity: item.sold_quantity,
      description: description.plain_text,
    },
  };

  return response;
};

function getDecimals(amount) {
  return parseInt(amount.toString().split(".")[1]) || 0;
}

module.exports = { formatSearchResponse, formatItemResponse };
