class StackOverFlowAPI {
  url = "https://api.stackexchange.com";

  getPosts(phrase, sort) {
    return fetch(
      `${this.url}/2.3/similar?order=desc&sort=${sort}&title=${phrase}&site=stackoverflow`
    )
      .then(this.handleErrors)
      .then((resp) => resp.json());
  }

  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }

    return resp;
  }
}

export default StackOverFlowAPI;
