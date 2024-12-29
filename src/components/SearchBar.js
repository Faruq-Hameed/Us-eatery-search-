import React from "react";
import { View, Text, TextInput, Keyboard, Image, StyleSheet, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';

const SearchBar = ({ testState, onAddText, onTextSubmit }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/search.png")} />
      <TextInput
        style={styles.textSearch}
        placeholder="search"
        value={testState}
        onChangeText={(text) => {
            onAddText(text)}
        }
        onSubmitEditing={() => onTextSubmit(testState)}
        returnKeyType="search"
      />
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => {
          Keyboard.dismiss(); // Dismiss the keyboard
          onAddText(""); // Clear the input text (optional)
        }}
      >
        {/* <Text style={styles.cancelText}>Cancel</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(223, 223, 223)",
    flexDirection: "row",
    // borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    height: 40,
    textAlign: "center",
  },
  image: {
    width: 40,
    height: 40,
  },
  textSearch: {
    // height: 50,
    width: "80%",
    fontSize: 20,
    paddingLeft: 20,
  },
  cancelButton: {
    marginLeft: 10,
    padding: 5,
  },
  cancelText: {
    fontSize: 16,
    color: "blue",
  },
});

export default SearchBar;
