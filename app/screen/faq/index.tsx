import Header from "@/app/component/header";
import React from "react";
import { Text, View } from "react-native";

export default function FaqScreen() {
  return (
    <View
      style={{
        padding: 10,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <Header title="FAQ" />
      <Text>FAQ</Text>
    </View>
  );
}
