import { BaseColors, Colors } from "@/constants/Colors";
import React from "react";
import { Text, View } from "react-native";

const Header = ({ title }: any) => {
  return (
    <View
      style={{
        height: 50,
        width: "100%",
        display: "flex",
        marginBottom: 10,
        alignItems: "center",
        borderBottomWidth: 3,
        justifyContent: "center",
        borderBottomColor: BaseColors.light.primary,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;
