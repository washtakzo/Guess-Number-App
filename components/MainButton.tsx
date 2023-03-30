import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

type Props = {
  children: string;
  backgroundColor: string;
  textColor: string;
  onPress: () => void;
};

const MainButton = ({
  children,
  onPress,
  backgroundColor,
  textColor,
}: Props) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "grey" }}
        style={[{ backgroundColor: backgroundColor }]}
      >
        <Text style={[styles.title, { color: textColor }]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 24,
    marginHorizontal: 4,
    overflow: "hidden",
    elevation: 2,
  },
  title: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    textAlign: "center",
  },
});
