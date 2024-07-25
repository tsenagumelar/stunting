import { ScrollView, Text, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  Button,
  Datepicker,
  Icon,
  IconElement,
  Input,
  Radio,
} from "@ui-kitten/components";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

//nama, umur, berat, tinggi, kelamin

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  const [value, setValue] = useState("");

  const CalendarIcon = (props: any): IconElement => (
    <Ionicons {...props} name="calendar" size={20} />
  );
  return (
    <ThemedView style={{ flex: 1 }}>
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
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <ScrollView>
          <View
            style={{
              rowGap: 25,
            }}
          >
            <Input
              label={"Nama"}
              value={value}
              placeholder="Nama"
              onChangeText={(nextValue) => setValue(nextValue)}
              style={{
                backgroundColor: "#fafeff",
                borderWidth: 1,
              }}
            />
            <Datepicker
              label="Tanggal Lahir"
              placeholder="Pick Date"
              date={new Date()}
              accessoryRight={CalendarIcon}
            />
            <Input
              label={"Umur"}
              value={value}
              placeholder="Umur"
              onChangeText={(nextValue) => setValue(nextValue)}
              style={{
                backgroundColor: "#fafeff",
                borderWidth: 1,
              }}
            />
            <Input
              label={"Berat"}
              value={value}
              placeholder="Berat"
              onChangeText={(nextValue) => setValue(nextValue)}
              style={{
                backgroundColor: "#fafeff",
                borderWidth: 1,
              }}
            />
            <Input
              label={"Tinggi"}
              value={value}
              placeholder="Tinggi"
              onChangeText={(nextValue) => setValue(nextValue)}
              style={{
                backgroundColor: "#fafeff",
                borderWidth: 1,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Radio checked={true}>Laki-laki</Radio>
              <Radio checked={false}>Perempuan</Radio>
            </View>
            <Button status="basic">
              <Text style={{ color: "black" }}>HITUNG</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    </ThemedView>
  );
}
