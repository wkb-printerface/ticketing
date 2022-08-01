import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // we are on the server

    return axios.create({
      baseURL: "http://www.ticketing-wiers-prod-app.xyz/",
      headers: req.headers,
    });
  } else {
    // we must be on the browser
    return axios.create({
      baseURL: "/",
    });
  }
};

export default buildClient;
