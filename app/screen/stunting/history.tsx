import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function History() {
  const babyBoy =
    "https://img.freepik.com/premium-vector/vector-icon-baby-boy-isolated-white-background_750364-2580.jpg";
  const babyGirl =
    "https://cdn1.vectorstock.com/i/1000x1000/92/30/little-girl-icon-kid-design-graphic-vector-9479230.jpg";

  const data = [
    {
      id: 1,
      name: "Budi",
      age: 2,
      weight: 10,
      height: 70,
      date: "10-01-2024 09:00",
      image: babyBoy,
      color: "#ff704d",
      status: "Sangat Kurang",
    },
    {
      id: 2,
      name: "Riri",
      age: 5,
      weight: 20,
      height: 110,
      date: "11-02-2024 09:00",
      image: babyGirl,
      color: "#b5ff66",
      status: "Normal",
    },
    {
      id: 3,
      name: "Donn",
      age: 5,
      weight: 20,
      height: 110,
      date: "11-02-2024 09:00",
      image: babyBoy,
      color: "#b5ff66",
      status: "Normal",
    },
    {
      id: 4,
      name: "Meti",
      age: 5,
      weight: 20,
      height: 110,
      date: "11-02-2024 09:00",
      image: babyGirl,
      color: "#ff704d",
      status: "Sangat Kurang",
    },
    {
      id: 5,
      name: "Dev",
      age: 5,
      weight: 20,
      height: 110,
      date: "11-02-2024 09:00",
      image: babyGirl,
      color: "#ffc266",
      status: "Kurang",
    },
  ];

  return (
    <ScrollView>
      <View
        style={{
          rowGap: 20,
        }}
      >
        {data.map((item) => (
          <View
            style={{
              width: "100%",
              height: 80,
              borderRadius: 50,
              padding: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: item.color,
            }}
          >
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginRight: 10,
              }}
              source={{
                uri: item.image,
              }}
            />
            <View
              style={{
                height: "100%",
                width: "50%",
                rowGap: 5,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Text>
              <Text>{item.age} Tahun </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                {item.status}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
