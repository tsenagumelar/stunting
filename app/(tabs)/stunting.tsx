import { ScrollView, Text, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  return (
    <ThemedView style={{ flex: 1 }}>
      <View
        style={{
          height: "5%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View
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
            backgroundColor: Colors[colorScheme ?? "light"].tint,
          }}
        >
          <Text style={{ color: "white" }}>STUNTING</Text>
        </View>

        <View
          style={{
            height: "100%",
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "black",
            borderWidth: 1,
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
            borderLeftWidth: 0.5,
          }}
        >
          <Text>HISTORY</Text>
        </View>
      </View>
      <ScrollView></ScrollView>
    </ThemedView>
  );
}
