import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MainButton from "../components/MainButton";
import Title from "../components/Title";
import Colors from "../helper/Colors";
import Card from "../UI/Card";
import { getRandomNumber } from "../helper/functions";

type Props = {
  userNumber: number;
};

type indication = "more" | "less";

const GameScreen = ({ userNumber }: Props) => {
  const [phoneGuess, setPhoneGuess] = useState<number[]>([
    getRandomNumber(1, 99),
  ]);

  const addGuess = (guessNumber: number) => {
    setPhoneGuess((currentState) => [...currentState, guessNumber]);
  };

  const guessNumber = (indication: indication) => {
    const phoneMinimumGuess =
      phoneGuess.length > 2 ? [...phoneGuess].sort()[0] : 0;
    const phoneMaximumGuess =
      phoneGuess.length > 2 ? [...phoneGuess].sort().reverse()[0] : 99;
    const lastGuess = phoneGuess[phoneGuess.length - 1];

    console.log(phoneGuess);

    if (indication === "less") {
      return getRandomNumber(1, lastGuess!!);
    } else if (indication === "more") {
      return getRandomNumber(lastGuess!!, 99);
    }

    return lastGuess!!;
  };

  const guessHigh = () => {
    addGuess(guessNumber("more"));
  };

  const guessLow = () => {
    addGuess(guessNumber("less"));
  };

  return (
    <View style={styles.screenContainer}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Title style={{ width: "90%" }}>Opponent's Guess</Title>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{phoneGuess.at(-1)}</Text>
        </View>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Higher or lower ?</Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <MainButton textStyle={styles.buttonText} onPress={guessLow}>
                -
              </MainButton>
            </View>
            <View style={styles.buttonContainer}>
              <MainButton textStyle={styles.buttonText} onPress={guessHigh}>
                +
              </MainButton>
            </View>
          </View>
        </Card>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>{phoneGuess}</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 12,
  },
  numberContainer: {
    borderWidth: 4,
    borderRadius: 4,
    borderColor: Colors.SecondaryText,
    width: "80%",
  },
  card: {
    justifyContent: "space-between",
    height: 140,
    marginVertical: 0,
  },
  cardTitle: {
    fontSize: 24,
    color: Colors.SecondaryText,
  },
  number: {
    fontSize: 36,
    textAlign: "center",
    paddingVertical: 24,
    color: Colors.SecondaryText,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
  },
});
