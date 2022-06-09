import axios from "axios";

/**
 * Main entry point for API. Very basic config, base url defined in .env
 */
export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});