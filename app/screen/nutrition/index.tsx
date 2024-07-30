import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";

export default function NutritionScreen() {
  const data = [
    {
      id: 1,
      title: "Nutrisi",
      image:
        "https://jpg-indonesia.net/wp-content/uploads/2020/03/banner-indoHCF.jpeg",
    },
    {
      id: 2,
      title: "Gizi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLM90wKWW5eFB2P8ihg5WEfIyKQH8Ui4gKQ&s",
    },
    {
      id: 3,
      title: "Makanan Sehat",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/infomase/2024/02/IMG_20240221_164110.jpg",
    },
    {
      id: 4,
      title: "Makanan Bergizi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fdYuJHqVUXA0HSvxPMOZxHSZz462px0ypQ&s",
    },
    {
      id: 5,
      title: "Nutrisi 2",
      image:
        "https://jpg-indonesia.net/wp-content/uploads/2020/03/banner-indoHCF.jpeg",
    },
    {
      id: 6,
      title: "Gizi ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLM90wKWW5eFB2P8ihg5WEfIyKQH8Ui4gKQ&s",
    },
    {
      id: 7,
      title: "Makanan Sehat 2",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/infomase/2024/02/IMG_20240221_164110.jpg",
    },
    {
      id: 8,
      title: "Makanan Bergizi 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fdYuJHqVUXA0HSvxPMOZxHSZz462px0ypQ&s",
    },
    {
      id: 1,
      title: "Nutrisi",
      image:
        "https://jpg-indonesia.net/wp-content/uploads/2020/03/banner-indoHCF.jpeg",
    },
    {
      id: 2,
      title: "Gizi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLM90wKWW5eFB2P8ihg5WEfIyKQH8Ui4gKQ&s",
    },
    {
      id: 3,
      title: "Makanan Sehat",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/infomase/2024/02/IMG_20240221_164110.jpg",
    },
    {
      id: 4,
      title: "Makanan Bergizi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fdYuJHqVUXA0HSvxPMOZxHSZz462px0ypQ&s",
    },
    {
      id: 5,
      title: "Nutrisi 2",
      image:
        "https://jpg-indonesia.net/wp-content/uploads/2020/03/banner-indoHCF.jpeg",
    },
    {
      id: 6,
      title: "Gizi ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLM90wKWW5eFB2P8ihg5WEfIyKQH8Ui4gKQ&s",
    },
    {
      id: 7,
      title: "Makanan Sehat 2",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/infomase/2024/02/IMG_20240221_164110.jpg",
    },
    {
      id: 8,
      title: "Makanan Bergizi 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fdYuJHqVUXA0HSvxPMOZxHSZz462px0ypQ&s",
    },
  ];

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              height: "100%",
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {data.map((item, index) => (
              <View
                key={index}
                style={{
                  width: Dimensions.get("screen").width * 0.3,
                  height: Dimensions.get("screen").width * 0.5,
                  display: "flex",
                  alignItems: "center",
                  margin: 5,
                  marginBottom: 20,
                  borderWidth: 1,
                  borderColor: "#0a7ea4",
                  backgroundColor: "#0a7ea4",
                }}
              >
                <Image
                  style={{
                    width: Dimensions.get("screen").width * 0.295,
                    height: Dimensions.get("screen").width * 0.4,
                    resizeMode: "cover",
                    marginBottom: 10,
                  }}
                  source={{
                    uri: item.image,
                  }}
                />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "bold",
                    color: "#fff",
                    fontStyle: "italic",
                  }}
                >
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
