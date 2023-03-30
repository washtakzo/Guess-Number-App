import React from "react";
import { View, Text, StatusBar, StyleSheet, TextInput } from "react-native";
import MainButton from "../components/MainButton";
import Title from "../components/Title";
import Colors from "../helper/Colors";

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle={"light-content"} />
      <Title color={Colors.Third}>Guess My Number</Title>
      <View style={styles.chooseNumberContainer}>
        <Text style={styles.chooseNumberTitle}>Enter a Number</Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={styles.chooseNumberInput}
            keyboardType="number-pad"
            maxLength={2}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <MainButton
            backgroundColor={Colors.Secondary}
            textColor={Colors.SecondaryText}
            onPress={() => console.log("test")}
          >
            Reset
          </MainButton>
          <MainButton
            backgroundColor={Colors.Secondary}
            textColor={Colors.SecondaryText}
            onPress={() => console.log("test")}
          >
            Confirm
          </MainButton>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chooseNumberContainer: {
    backgroundColor: Colors.Primary,
    width: "80%",
    height: 180,
    padding: 18,
    borderRadius: 8,
    marginVertical: 28,
    elevation: 8,
  },
  chooseNumberTitle: {
    fontSize: 22,
    textAlign: "center",
    color: Colors.Third,
  },
  chooseNumberInput: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.Third,
    marginVertical: 18,
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    width: "20%",
    color: Colors.Third,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
