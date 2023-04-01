import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  children: string;
  color?: string;
  style?: any;
};

const Title = ({ children, color = "black", style }: Props) => {
  return (
    <View style={[styles.titleContainer, { borderColor: color }, style]}>
      <Text style={[styles.title, { color: color }]}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    padding: 12,
    borderWidth: 2,
  },
  title: {
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "french",
    textAlign: "center",
  },
});
