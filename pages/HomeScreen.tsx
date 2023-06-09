import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import MainButton from "../components/MainButton";
import Title from "../components/Title";
import Colors from "../helper/Colors";

type Props = {
  onValidateUserNumber: (userNumber: number) => void;
};

const HomeScreen = ({ onValidateUserNumber }: Props) => {
  const [userInput, setUserInput] = useState<string>("");

  const changeInputTextHandler = (userInput: string) => {
    setUserInput(userInput);
  };

  const resetInput = () => setUserInput("");

  const confirmInput = () => {
    const userNumber = +userInput;

    if (isNaN(userNumber)) {
      Alert.alert("Error", "Provided input is not a number", [
        { text: "Wakatta", style: "destructive", onPress: resetInput },
      ]);
      return;
    }

    if (userNumber < 1 || userNumber > 99) {
      Alert.alert("Error", "Please insert a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    }

    onValidateUserNumber(userNumber);
  };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.screenContainer}>
          <Title color={Colors.Third}>Guess My Number</Title>
          <View style={styles.chooseNumberContainer}>
            <Text style={styles.chooseNumberTitle}>Enter a Number</Text>
            <TextInput
              style={styles.chooseNumberInput}
              keyboardType="number-pad"
              maxLength={2}
              value={userInput}
              onChangeText={changeInputTextHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <MainButton
                  backgroundColor={Colors.Secondary}
                  textColor={Colors.SecondaryText}
                  onPress={resetInput}
                >
                  Reset
                </MainButton>
              </View>
              <View style={styles.buttonContainer}>
                <MainButton
                  backgroundColor={Colors.Secondary}
                  textColor={Colors.SecondaryText}
                  onPress={confirmInput}
                >
                  Confirm
                </MainButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chooseNumberContainer: {
    alignItems: "center",
    justifyContent: "center",
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
  buttonContainer: {
    flex: 1,
  },
});
