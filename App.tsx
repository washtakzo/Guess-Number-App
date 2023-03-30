import { View, StyleSheet, ImageBackground } from "react-native";
import HomeScreen from "./pages/HomeScreen";
import Colors from "./helper/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
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
        <HomeScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
