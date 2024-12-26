import react, { useEffect, useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Details from "../components/Details";
import { getAData } from "../components/axios";

const initialState = {
  itemId: null, //
  data: [],
  loading: false,
  error: null,
};
const reducer = (state, action) => {
  //state = {search_text: "", data: []};
  switch (action.type) {
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
// ItemScreen Component
const ItemScreen = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const handleSearch = async () => {
      dispatch({ type: "search_start" });
      try {
        const result = await getAData(props.route.params.itemId); // Simulating API call
        dispatch({ type: "search_success", payload: result });
      } catch (error) {
        dispatch({
          type: "search_error",
          payload: error.message || "An error occurred",
        });
      }
    };
    handleSearch();
  }, [props.route.params.itemId]);

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
    <View >
      <Text style={styles.headerContainer}>{state.data.name}</Text>
      <Details photos={state.data.photos} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    borderTopWidth: 1,
  },
  headerContainer: {
    // borderWidth: 1,
    fontWeight: "bold",
    paddingLeft: 10,
    fontSize: 20,
    marginTop: 10,
  }
});

export default ItemScreen;
