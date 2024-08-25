import axios from "axios"

class PortfolioApi {
  constructor() {
    this.baseUrl = import.meta.env.VITE_BACKEND_URL;
  }

  getBotScript() {
    return axios.get(`${this.baseUrl}/bot_script`);
  }
}

export const portfolioApi = new PortfolioApi();
