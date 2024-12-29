import React from "react";
import { View, Text, TextInput, Keyboard, Image, StyleSheet, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';

const SearchBar = ({ testState, onAddText, onTextSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.icon} />
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
    marginBottom: 10,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
  },
  icon: {
   fontSize: 30,
   alignSelf: "center",
   flex: 0.14
  },
  textSearch: {
    flex: 1,
    fontSize: 20,
  },
});

export default SearchBar;
