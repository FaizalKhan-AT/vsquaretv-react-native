import { View, Text } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View
      style={{ width: 100, backgroundColor: "black", height: 10, bottom: 10 }}
    >
      <Text style={{ color: "black", fontSize: 40 }}>Footer</Text>
    </View>
  );
};

export default Footer;
