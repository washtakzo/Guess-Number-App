import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import MainButton from "../components/MainButton";
import Title from "../components/Title";
import Colors from "../helper/Colors";
import Card from "../components/UI/Card";
import { generateRandomBetween } from "../helper/functions";

type Props = {
  userNumber: number;
  onFinishGame: (guesses: number[]) => void;
};

enum Indication {
  MORE,
  LESS,
}

let minBoudary = 1;
let maxBoudary = 100;

const GameScreen = ({ userNumber, onFinishGame }: Props) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [phoneGuess, setPhoneGuess] = useState<number[]>([initialGuess]);

  useEffect(() => {
    const currentGuess = phoneGuess.at(-1)!!;

    if (currentGuess === userNumber) {
      minBoudary = 1;
      maxBoudary = 100;
      onFinishGame(phoneGuess);
    }
  }, [phoneGuess, userNumber, onFinishGame]);

  const addGuess = (guessNumber: number) => {
    setPhoneGuess((currentState) => [...currentState, guessNumber]);
  };

  const guessLowHigh = (indication: Indication) => {
    const currentGuess = phoneGuess.at(-1)!!;

    if (currentGuess === userNumber) return;

    const isUserLying =
      (indication === Indication.LESS && userNumber > currentGuess) ||
      (indication === Indication.MORE && userNumber < currentGuess);

    if (isUserLying) {
      Alert.alert("Don't lie!", "You know that this is wrong... xD", [
        { text: "Sorry !", style: "cancel" },
      ]);
      return;
    }

    if (indication === Indication.MORE) {
      minBoudary = currentGuess + 1;
    } else if (indication === Indication.LESS) {
      maxBoudary = currentGuess;
    }

    const newGuess = generateRandomBetween(minBoudary, maxBoudary, -1);

    addGuess(newGuess);
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
              <MainButton
                textStyle={styles.buttonText}
                onPress={() => guessLowHigh(Indication.LESS)}
              >
                -
              </MainButton>
            </View>
            <View style={styles.buttonContainer}>
              <MainButton
                textStyle={styles.buttonText}
                onPress={guessLowHigh.bind(this, Indication.MORE)}
              >
                +
              </MainButton>
            </View>
          </View>
        </Card>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>{phoneGuess}</Text>
        {phoneGuess.map((guess, index) => (
          <View
            key={guess}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              padding: 12,
              borderWidth: 2,
              borderRadius: 16,
              marginVertical: 8,
              borderColor: Colors.Primary,
              backgroundColor: Colors.Secondary,
            }}
          >
            <Text># {index + 1}</Text>
            <Text>{guess}</Text>
          </View>
        ))}
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
