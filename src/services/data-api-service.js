import config from "../config";
import TokenService from "./token-service";

const DataService = {
  getWords() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getHeadWord() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  postGuess(guess) {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ guess })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default DataService;
