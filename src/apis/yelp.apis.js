import axios from "axios";
import { Alert } from "react-native";
import yelp from "../config/yelp.config";

export const getAllData = async (term) => {
  try {
    const response = await yelp.get(
      `/search?term=${term}&location=california&limit=50`
    );
    return response.data.businesses;
  } catch (error) {
    Alert.alert("Error", error.message);
  }
}

export const getAData = async (id) => {
  try {
    const response = await yelp.get(`/${id}`);
    return response.data;
  } catch (error) {
    Alert.alert("Error", error.message);
  }
};
