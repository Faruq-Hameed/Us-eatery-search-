import react, { useEffect, useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Details from "../components/Details";
import { getAData } from "../apis/yelp.apis";
import { Loading, Error, NoData } from "../hooks/useApiData";

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
const ItemScreen = ({route}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {loading, error, data} = state;
  const {itemId} = route.params
  const handleSearch = async (id) => {
    dispatch({ type: "search_start" });
    try {
      const result = await getAData(id); // Simulating API call
      dispatch({ type: "search_success", payload: result });
    } catch (error) {
      dispatch({
        type: "search_error",
        payload: error.message || "An error occurred",
      });
    }
  };
  useEffect(() => {
    handleSearch(itemId);
  }, []);

   if (loading) return <Loading />;
  
    if (error) return <Error error={error} />;
  
    if (!data) return <NoData />;

  return (
    <View>
      <Text style={styles.headerContainer}>{state.data.name}</Text>
      <Details photos={data.photos} />
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
  },
});

export default ItemScreen;
