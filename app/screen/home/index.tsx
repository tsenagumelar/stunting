import React from "react";
import useHooks from "@/app/utils/hooks";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Link } from "expo-router";

import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { useRef } from "react";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const { datas } = useHooks();

  const Header = () => {
    return (
      <View
        style={{
          height: "12.5%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          justifyContent: "flex-start",
        }}
      >
        <StatusBar style="auto" translucent={false} />
        <View
          style={{
            width: 65,
            height: 65,
            borderRadius: 50,
            marginRight: 15,
          }}
        >
          <Image
            style={{ width: 65, height: 65, borderRadius: 50 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/219/219988.png",
            }}
          />
        </View>
        <View
          style={{
            height: 50,
            width: "auto",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Hello Admin</Text>
          <Text style={{ fontStyle: "italic" }}>How do you feel today?</Text>
        </View>
      </View>
    );
  };
  const ref = useRef<ICarouselInstance>(null);

  const colors = [
    "#3AA0F7",
    "#F5D399",
    "#899F9C",
    "#B3C680",
    "#5C6265",
    "#26292E",
  ];

  const images = [
    "https://jpg-indonesia.net/wp-content/uploads/2020/03/banner-indoHCF.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLM90wKWW5eFB2P8ihg5WEfIyKQH8Ui4gKQ&s",
    "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/infomase/2024/02/IMG_20240221_164110.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fdYuJHqVUXA0HSvxPMOZxHSZz462px0ypQ&s",
  ];

  const Banner = () => {
    return (
      <View
        style={{
          height: "22.5%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <Carousel
          ref={ref}
          height={Dimensions.get("screen").height * 0.225} // Add the height property
          width={Dimensions.get("screen").width} // Add the width property
          style={{
            width: Dimensions.get("screen").width,
          }}
          loop
          pagingEnabled={true}
          snapEnabled={true}
          autoPlay={true}
          autoPlayInterval={3000}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 52.5,
          }}
          data={images}
          renderItem={({ index }) => (
            <View
              style={{
                height: "90%",
                width: "100%",
                // borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "stretch",
                  borderWidth: 0.5,
                  borderColor: Colors.light.tint,
                }}
                source={{
                  uri: images[index],
                }}
              />
            </View>
          )}
        />
      </View>
    );
  };

  const Menus = () => {
    return (
      <View
        style={{
          height: "25%",
          width: "100%",
          display: "flex",
          paddingHorizontal: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: "55%",
            marginTop: 10,
            width: "100%",
            display: "flex",
            borderRadius: 20,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            borderWidth: 0.5,
            borderColor: Colors.light.tint,
            backgroundColor: "#e6f7ff",
          }}
        >
          {datas.Menus.map((item, index) => (
            <Link href={`/${item.name}`} key={item.name}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "25%",
                }}
              >
                <View
                  key={item.name}
                  style={{
                    width: 50,
                    height: 50,
                    display: "flex",
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                  }}
                >
                  <TabBarIcon
                    name={item.icon1.value.name}
                    color={colors[index]}
                  />
                </View>
                <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              </View>
            </Link>
          ))}
        </View>
      </View>
    );
  };

  const Article = () => {
    return (
      <View
        style={{
          width: "100%",
          height: "37.5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollView
          style={{
            width: "90%",
            height: "100%",
          }}
        >
          {images.map((item, index) => (
            <View
              key={index}
              style={{
                marginBottom: 15,
                height: 125,
                width: "100%",
                padding: 7.5,
                display: "flex",
                backgroundColor: "#f2f2f2",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 1.84,
                elevation: 2,
                borderRadius: 20,
                borderWidth: 0.5,
                borderColor: Colors.light.tint,
              }}
            >
              <Image
                style={{
                  width: "35%",
                  height: "100%",
                  borderRadius: 20,
                }}
                source={{
                  uri: item,
                }}
              />
              <View
                style={{
                  width: "65%",
                  height: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  paddingHorizontal: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Stunting
                </Text>
                <Text style={{ fontStyle: "italic", fontSize: 12 }}>
                  Hambatan pertumbuhan, bantutan pertumbuhan, atau tengkes
                  adalah keadaan berhentinya pertumbuhan pada anak.
                </Text>
                <Text></Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Header />
      <Banner />
      <Menus />
      <Article />
    </View>
  );
}
