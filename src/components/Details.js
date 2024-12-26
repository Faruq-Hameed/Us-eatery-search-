import react from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { businessDetails as data } from "./data";

const Details = ({photos}) => {

    if (!data) {
      return (
        <FlatList
          style={styles.listContainer}
          data={data.photos}
          renderItem={({ item }) => {
            return (
              <View style={styles.listChild}>
                <Image
                  style={styles.image}
                //   source={{ uri: item }}
                  source={{
                      uri: "https://via.placeholder.com/100",
                    }}
                />
              </View>
            );
          }}
        />
      );
    }
  return (
    <FlatList
      style={styles.listContainer}
      data={photos}
      renderItem={({ item }) => {
        return (
          <View style={styles.listChild}>
            <Image
              style={styles.image}
              source={{ uri: item }}
              // source={{
              //     uri: "https://via.placeholder.com/100",
              //   }}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150,
    margin: 10,
    // paddingRight:20,
  },
});

export default Details;
