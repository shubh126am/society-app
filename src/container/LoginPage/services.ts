// import axios from "../../axios.config";
import Axios from "axios"; // used for dummy api

const api_key = "AIzaSyD1ErQJcXvglnM-O5-8ZBpWXGArbEk4Oic";
export const Authenticate = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api_key}`;

export const authService = {
  login: async (username: string, password: string) => {
    const response = await Axios.post(Authenticate, {
      email: username,
      password: password
    });
    console.log(response.data);
    return response.data;
  }
};
