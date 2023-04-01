import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Title from "../components/Title";
import MainButton from "../components/MainButton";

type Props = {
  guesses: number[];
};

const GameOverScreen = ({ guesses }: Props) => {
  const triesToGuess = guesses.length;
  const guessedNumber = guesses.at(-1);

  return (
    <View style={styles.screenContainer}>
      <Title>Game Over</Title>
      <Image
        style={styles.image}
        source={require("../assets/images/naruto-shippuden.jpg")}
      />
      <Text>
        Your phone needed {triesToGuess} rounds to guess the number{" "}
        {guessedNumber}.
      </Text>
      <MainButton onPress={() => console.log("test")}>
        Start New Game
      </MainButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 24,
  },
  image: {
    height: "50%",
    width: "50%",
  },
});
