// useApiData.js
import { useState, useEffect } from "react";
import { Alert, ActivityIndicator } from "react-native";
import { getAllData } from "../apis/yelp.apis";

const useApiData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = async (term) => {
    setLoading(true);
    setError(null);
    try {
      const searchData = await getAllData(term);
      console.log({ searchData: searchData.length });
      setData(searchData);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch("restaurants");
  }, []);

  return { data, loading, error, handleSearch };
};

export const Loading = () => <ActivityIndicator size="large" color="#0000ff" />;

export const Error = ({ error }) =>
  Alert.alert(error.message || "An error occurred");

export const NoData = () => <Text>No data available</Text>;

export default useApiData;
