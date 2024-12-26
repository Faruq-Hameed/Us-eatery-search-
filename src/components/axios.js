import axios from "axios";
import { data } from "./data";
import yelp from "../apis/yelp";

const API_KEY =
  " Bearer ymfuM3qxeBYFstLFIMpdYRQJHlIkVAF34dNhFvc-jAwq9GO612qvqbtcTFN4aTk4Jr3MSZAiw8v_rUClbz6rS_7kWSk4DlB_nIzuaQ2ZWZxnV1qpfT2PJOpIxPRqZ3Yx";

export const getAllData = async (term) => {
  try {
    // const url = `https://api.yelp.com/v3/businesses/search?term=${params}&location=nyc&price=1`;
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=california&limit=50`;
    const response = await axios.get(url, {
      headers: { Authorization: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response?.data || error.message
    );
  }
};

export const getAData = async (id) => {
  try {
    const response = yelp.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response?.data || error.message
    );
    throw error;
  }
};
