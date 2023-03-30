import { View, StyleSheet, SafeAreaView } from "react-native";
import HomeScreen from "./pages/HomeScreen";
import Colors from "./helper/Colors";

export default function App() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
});
