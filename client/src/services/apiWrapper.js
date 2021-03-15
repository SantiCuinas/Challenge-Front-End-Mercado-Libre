const BASE_URL = "http://localhost:9000";

export function searchItems(query) {
  return fetch(`${BASE_URL}/api/items?q=${query}`).then((res) => {
    return res.text().then((res) => {
      return JSON.parse(res);
    });
  });
}

export function getDetails(id) {
  return fetch(`${BASE_URL}/api/items/${id}`).then((res) => {
    return res.text().then((res) => {
      return JSON.parse(res);
    });
  });
}
