import React from "react";
import { Text, View, StyleSheet, Pressable, Dimensions } from "react-native";
import Colors from "../helper/Colors";

type Props = {
  children: string;
  backgroundColor?: string;
  textColor?: string;
  onPress: () => void;
  textStyle?: any;
};

const MainButton = ({
  children,
  onPress,
  backgroundColor = Colors.Secondary,
  textColor,
  textStyle,
}: Props) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "grey" }}
        style={[{ backgroundColor: backgroundColor }]}
      >
        <Text style={[styles.title, { color: textColor }, textStyle]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default MainButton;

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 24,
    marginHorizontal: 4,
    overflow: "hidden",
    elevation: 2,
  },
  title: {
    paddingVertical: width < 380 ? 6 : 12,
    paddingHorizontal: width < 380 ? 1 : 18,
    textAlign: "center",
  },
});
