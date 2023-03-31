import { useState } from "react";

import { StyleSheet, ImageBackground, StatusBar } from "react-native";
import HomeScreen from "./pages/HomeScreen";
import GameScreen from "./pages/GameScreen";
import Colors from "./helper/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();

  const validateUserNumberHandler = (userNumber: number) => {
    setUserNumber(userNumber);
  };

  let screenToDisplay = (
    <HomeScreen onValidateUserNumber={validateUserNumberHandler} />
  );

  if (userNumber) {
    screenToDisplay = <GameScreen userNumber={userNumber} />;
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
