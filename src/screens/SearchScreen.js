import react, { useState, useReducer, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import useApiData, { Loading, Error, NoData } from "../hooks/useApiData";
import SearchBar from "../components/SearchBar";
import FoodCategory from "../components/FoodCategory";
import { getAllData } from "../apis/yelp.apis";


//     case "search_start":
//       return { ...state, loading: true };
//     case "search_success":
//       return { ...state, data: action.payload, loading: false }; //added the search results to state
//     case "search_error":
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//         data: null,
//       };
//     default:
//       return state;
//   }
// };
const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const { data, loading, error, handleSearch } = useApiData();
  /**Function that handles api call(reducer cannot handle async call so this function is used) */
  const filterByPrice = ( price) => {
    return data?.filter((business) => business.price === price) || [];
  };
  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  if (!data) return <NoData />;

  return (
    <View style={styles.mainContainer}>

      <SearchBar
        testState={term} //current search text
        onAddText={setTerm} //new search ter
        onTextSubmit={ () =>handleSearch(term)}
      />
    <ScrollView >

      <FoodCategory
        category="Cost Effective"
        data={filterByPrice("$")}
      />
      <FoodCategory
        category="Bit Pricer"
        data={filterByPrice("$$")}
      />
      <FoodCategory
        category="Big Spender!"
        data={filterByPrice("$$$")}

      />
      <FoodCategory
        category="Executive Spender!"
        data={filterByPrice("$$$")}

      />
    </ScrollView>
      </View>
     
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
