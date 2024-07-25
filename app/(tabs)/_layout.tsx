import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import useHooks from "../utils/hooks";
import { View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { datas } = useHooks();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          height: 70,
        },
      }}
    >
      {datas.BottomNav.map((menu, index) => (
        <Tabs.Screen
          key={index}
          name={menu.name}
          options={{
            title: "",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  height: 60,
                  width: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? "#e6f9ff" : "white",
                  borderColor: focused
                    ? Colors[colorScheme ?? "light"].tint
                    : "black",
                  borderWidth: 0.5,
                  borderRadius: 50,
                  marginBottom: menu.name === "index" ? 30 : -15,
                }}
              >
                <TabBarIcon
                  size={27.5}
                  color={menu.color}
                  name={focused ? menu.icon1.value.name : menu.icon2.value.name}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
