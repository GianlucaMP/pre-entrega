import fetch from "node-fetch";

const BASE_URL = "https://fakestoreapi.com";
const defaultHeaders = {
  "Content-Type": "application/json",
  "Accept": "application/json",
};

const Api = {
  executeRequest: async (endpoint, method = "GET", body = null) => {
    const url = `${BASE_URL}/${endpoint}`;

    const options = {
      method,
      headers: defaultHeaders,
      body: body ? JSON.stringify(body) : null,
    };

    return fetch(url, options)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => error);
  },
};

export default Api;
