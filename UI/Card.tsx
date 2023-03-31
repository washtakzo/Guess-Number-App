import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../helper/Colors";

type Props = {
  children: any;
  style?: any; //FIXME:change any type
};

const Card = ({ style, children }: Props) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.Primary,
    width: "80%",
    height: 180,
    padding: 18,
    borderRadius: 8,
    marginVertical: 28,
    elevation: 8,
  },
});
