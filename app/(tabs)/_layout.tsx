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
          borderTopColor: "black",
          borderTopWidth: 1,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: "#fafeff",
      }}
    >
      {datas.BottomNav.map((menu, index) => (
        <Tabs.Screen
          key={index}
          name={menu.name}
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  height: 57.5,
                  width: 57.5,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? "#fafeff" : "white",
                  borderColor: focused
                    ? Colors[colorScheme ?? "light"].tint
                    : "black",
                  borderWidth: 1,
                  borderRadius: 100,
                }}
              >
                <TabBarIcon
                  name={focused ? menu.icon1.value.name : menu.icon2.value.name}
                  color={color}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
