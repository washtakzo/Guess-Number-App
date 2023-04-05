import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Title from "../components/Title";
import MainButton from "../components/MainButton";
import Colors from "../helper/Colors";

type Props = {
  guesses: number[];
  onStartNewGame: () => void;
};

const GameOverScreen = ({ guesses, onStartNewGame }: Props) => {
  const triesToGuess = guesses.length;
  const guessedNumber = guesses.at(-1);

  return (
    <View style={styles.screenContainer}>
      <Title style={styles.title}>Game Over</Title>
      <Image
        style={styles.image}
        source={require("../assets/images/jiraya.jpg")}
      />
      <Text style={styles.text}>
        Your phone needed{" "}
        <Text style={[styles.text, styles.textNumbers]}>{triesToGuess}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={[styles.text, styles.textNumbers]}>{guessedNumber}</Text>.
      </Text>
      <MainButton onPress={onStartNewGame}>Start New Game</MainButton>
    </View>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 24,
  },
  title: {
    width: "80%",
  },
  image: {
    height: deviceWidth / 1.4,
    width: deviceWidth / 1.4,
    borderWidth: 2,
    borderRadius: deviceWidth / 2.8,
    borderColor: Colors.SecondaryText,
  },
  text: {
    fontSize: 22,
    textAlign: "center",
  },
  textNumbers: {
    fontWeight: "bold",
    color: Colors.Secondary,
  },
  button: {},
});
