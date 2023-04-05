import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from "react-native";
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

  const { height, width } = useWindowDimensions();
  const isLandScapeMode = width > height;

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

  if (isLandScapeMode) {
    return (
      <View style={landScapeStyles.screenContainer}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Title style={landScapeStyles.title}>Opponent's Guess</Title>

          <View style={landScapeStyles.card}>
            <Text style={landScapeStyles.cardTitle}>Higher or lower ?</Text>

            <View style={landScapeStyles.buttonsContainer}>
              <View style={landScapeStyles.buttonContainer}>
                <MainButton
                  textStyle={landScapeStyles.buttonText}
                  onPress={() => guessLowHigh(Indication.LESS)}
                >
                  -
                </MainButton>
              </View>
              <View style={landScapeStyles.numberContainer}>
                <Text style={landScapeStyles.number}>{phoneGuess.at(-1)}</Text>
              </View>
              <View style={landScapeStyles.buttonContainer}>
                <MainButton
                  textStyle={landScapeStyles.buttonText}
                  onPress={guessLowHigh.bind(this, Indication.MORE)}
                >
                  +
                </MainButton>
              </View>
            </View>
          </View>
        </View>
        <View style={landScapeStyles.flatListContainer}>
          <FlatList
            style={landScapeStyles.flatList}
            data={phoneGuess}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item: guess, index }) => (
              <View style={landScapeStyles.flatListItem}>
                <Text># {index + 1}</Text>
                <Text>{guess}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Title style={styles.title}>Opponent's Guess</Title>
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
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flatList}
          data={phoneGuess}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item: guess, index }) => (
            <View style={styles.flatListItem}>
              <Text># {index + 1}</Text>
              <Text>{guess}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 12,
  },
  title: { width: "90%" },
  numberContainer: {
    borderWidth: 4,
    borderRadius: 4,
    borderColor: Colors.SecondaryText,
    width: deviceWidth < 380 ? "50%" : "80%",
  },
  number: {
    fontSize: 36,
    textAlign: "center",
    paddingVertical: deviceWidth < 380 ? 12 : 24,
    color: Colors.SecondaryText,
  },
  card: {
    justifyContent: "space-between",
    height: deviceWidth < 380 ? 100 : 140,
    marginVertical: 0,
  },
  cardTitle: {
    fontSize: deviceWidth < 380 ? 16 : 24,
    color: Colors.SecondaryText,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonText: {
    fontSize: deviceWidth < 380 ? 12 : 16,
  },
  flatListContainer: { flex: 1, alignItems: "center" },
  flatList: { flex: 1, width: "100%" },
  flatListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 12,
    borderWidth: 2,
    borderRadius: 16,
    marginVertical: 8,
    borderColor: Colors.Primary,
    backgroundColor: Colors.Secondary,
  },
});

const landScapeStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 12,
  },
  title: { width: "90%" },
  numberContainer: {
    borderColor: Colors.SecondaryText,
    width: deviceWidth < 380 ? "50%" : "80%",
    flex: 1,
  },
  number: {
    fontSize: 26,
    textAlign: "center",
    paddingVertical: 0,
    paddingHorizontal: 0,
    color: Colors.SecondaryText,
  },
  card: {
    height: deviceWidth < 380 ? 100 : 140,
    marginVertical: 0,
    justifyContent: "space-around",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: deviceWidth < 380 ? 16 : 24,
    color: Colors.SecondaryText,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonText: {
    fontSize: deviceWidth < 380 ? 12 : 16,
  },
  flatListContainer: { flex: 1, alignItems: "center" },
  flatList: { flex: 1, width: "100%" },
  flatListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 12,
    borderWidth: 2,
    borderRadius: 16,
    marginVertical: 8,
    borderColor: Colors.Primary,
    backgroundColor: Colors.Secondary,
  },
});
