import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";

import useHooks from "../utils/hooks";
import { BaseColors } from "@/constants/Colors";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  const { datas } = useHooks();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: BaseColors.light.primary,
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
                  backgroundColor: focused
                    ? BaseColors.light.tertiary
                    : "white",
                  borderColor: focused
                    ? BaseColors.light.secondary
                    : BaseColors.light.primary,
                  borderWidth: 1,
                  borderRadius: 50,
                  marginBottom: menu.name === "index" ? 30 : -15,
                }}
              >
                <TabBarIcon
                  size={27.5}
                  color={focused ? "white" : menu.color}
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
