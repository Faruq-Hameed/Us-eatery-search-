import react from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// import { data } from "./data";

const filterByPrice = (businesses, priceLevel) => {
  return businesses?.filter((business) => business.price === priceLevel) || [];
};

/**Component to return in flatList renderItem */
const FlatListRenderComponent = ({ item, styles, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.listChild}
      onPress={() => navigation.navigate("Item", { itemId: item.id })}
      activeOpacity={0.7}
    >
      <Image
        style={styles.image}
        source={{ uri: item.image_url }}
        defaultSource={require("../../assets/food.png")}
        // source={{
        //     uri: "https://via.placeholder.com/100",
        //   }}
      />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemRating}>
        {item.rating} stars {item.review_count} Reviews
      </Text>
    </TouchableOpacity>
  );
};

const FoodCategory = ({ category, navigation, data, price }) => {
  if (!data) return null;
  const filteredData = filterByPrice(data, price);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerContainer}>{category}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.listContainer}
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <FlatListRenderComponent
              item={item}
              styles={styles}
              navigation={navigation}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderBottomWidth: 5,
    borderBlockColor: "rgb(223, 223, 223)",
    paddingBottom: 4,
  },
  headerContainer: {
    // borderWidth: 1,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  listContainer: {
    // height: 200,
    // borderWidth: 1,
  },
  listChild: {
    // height: 200,
    paddingRight: 20,
    // borderWidth: 1,
  },
  itemName: {
    // height: 200,
    // borderWidth: 1,
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 4,
  },
  itemRating: {
    color: "rgb(105, 105, 105)",
  },
  image: {
    width: 300,
    height: 150,
    marginVertical: 5,
  },
});

export default FoodCategory;
