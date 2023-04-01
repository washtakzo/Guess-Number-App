import { useCallback, useState } from "react";

import { StyleSheet, ImageBackground, StatusBar } from "react-native";
import HomeScreen from "./pages/HomeScreen";
import GameScreen from "./pages/GameScreen";
import GameOverScreen from "./pages/GameOverScreen";
import Colors from "./helper/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [isGameOver, setIsGameOver] = useState(false);
  const [guesses, setGuesses] = useState<number[]>([]);

  const [isFontLoaded] = useFonts({
    french: require("./assets/fonts/FRSCRIPT.ttf"),
  });

  const validateUserNumberHandler = (userNumber: number) => {
    setUserNumber(userNumber);
  };

  const finishGameHandler = useCallback(
    (guesses: number[]) => {
      setIsGameOver(true);
      setGuesses(guesses);
    },
    [setIsGameOver, setGuesses, guesses]
  );

  const restartGameHandler = () => {
    setGuesses([]);
    setUserNumber(undefined);
    setIsGameOver(false);
  };

  let screenToDisplay = (
    <HomeScreen onValidateUserNumber={validateUserNumberHandler} />
  );

  if (userNumber && !isGameOver) {
    screenToDisplay = (
      <GameScreen userNumber={userNumber} onFinishGame={finishGameHandler} />
    );
  }

  if (isGameOver) {
    screenToDisplay = (
      <GameOverScreen guesses={guesses} onStartNewGame={restartGameHandler} />
    );
  }

  if (!isFontLoaded) {
    return <AppLoading />;
  }
  return (
    <LinearGradient
      style={styles.screenContainer}
      colors={[Colors.Background, Colors.Third]}
    >
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        imageStyle={{ opacity: 0.2 }}
        source={require("./assets/images/naruto-shippuden.jpg")}
      >
        <StatusBar barStyle={"light-content"} />
        {screenToDisplay}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
