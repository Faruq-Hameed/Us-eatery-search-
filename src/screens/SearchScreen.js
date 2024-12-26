import react, { useState, useReducer, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import SearchBar from "../components/SearchBar";
import FoodCategory from "../components/FoodCategory";
import { useNavigation } from "@react-navigation/native";
import { getAllData } from "../components/axios";

const initialState = {
  search_text: "Nyc", //
  data: null,
  loading: false,
  error: null,
};
const reducer = (state, action) => {
  //state = {search_text: "", data: []};
  switch (action.type) {
    case "text_change":
      return { ...state, search_text: action.payload };
    case "search_start":
      return { ...state, loading: true };
    case "search_success":
      return { ...state, data: action.payload, loading: false }; //added the search results to state
    case "search_error":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};
const SearchScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, search_text } = state;
  const navigation = useNavigation();

  /**Function that handles api call(reducer cannot handle async call so this function is used) */
  const handleSearch = async () => {
    dispatch({ type: "search_start" }); //record the beginning of the search
    try {
      const result = await getAllData(search_text);
      dispatch({ type: "search_success", payload: result }); //updated the state with search result
    } catch (error) {
      dispatch({
        type: "search_error",
        payload: error.message || "An error occurred",
      });
    }
  };
  useEffect(() => {
    // Trigger the initial search with the default "Nyc" value
    handleSearch();
  }, []);
  if (state.loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (state.error) {
    return <Text>Error: {state.error}</Text>;
  }

  if (!state.data) {
    return <Text>No data available</Text>;
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <SearchBar
        testState={search_text} //current search text
        onAddText={(payload) => dispatch({ type: "text_change", payload })}
        onTextSubmit={handleSearch}
      />
      <FoodCategory
        category="Cost Effective"
        navigation={navigation}
        data={data}
        price="$"
      />
      <FoodCategory
        category="Bit Pricer"
        navigation={navigation}
        price="$$"
        data={data}
      />
      <FoodCategory
        category="Big Spender!"
        navigation={navigation}
        data={data}

        price="$$$"
      />
      <FoodCategory
        category="Executive Spender!"
        navigation={navigation}
        data={data}
        price="$$$$"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    borderTopWidth: 1,
  },
});

export default SearchScreen;
