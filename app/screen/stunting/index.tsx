import { Button, Text, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { BaseColors, Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useState } from "react";
import React from "react";
import Stunting from "./stunting";
import History from "./history";
import Header from "@/app/component/header";

//nama, umur, berat, tinggi, kelamin

export default function Default() {
  const colorScheme = useColorScheme();
  const [tab, setTab] = useState("stunting");

  return (
    <ThemedView style={{ flex: 1, padding: 10 }}>
      <Header title="STUNTING" />
      <View
        style={{
          height: 50,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          style={{
            height: "100%",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderColor: Colors[colorScheme ?? "light"].tint,
            borderWidth: 1,
            borderTopLeftRadius: 100,
            borderBottomLeftRadius: 100,
            borderRightWidth: 0.5,
            backgroundColor:
              tab === "stunting" ? BaseColors.light.primary : "white",
          }}
          onPress={() => setTab("stunting")}
        >
          <Text
            style={{
              color: tab === "history" ? "black" : "white",
            }}
          >
            STUNTING
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: "100%",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderColor: Colors[colorScheme ?? "light"].tint,
            borderWidth: 1,
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
            borderLeftWidth: 0.5,
            backgroundColor:
              tab === "history" ? BaseColors.light.primary : "white",
          }}
          onPress={() => setTab("history")}
        >
          <Text style={{ color: tab === "stunting" ? "black" : "white" }}>
            HISTORY
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        {tab === "stunting" ? <Stunting /> : <History />}
      </View>
    </ThemedView>
  );
}
